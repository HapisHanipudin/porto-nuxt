import { defineStore } from "pinia";

export const useSpotifyStore = defineStore({
  id: "mySpotifyStore",
  state: () => ({
    config: useRuntimeConfig(),
    accessToken: "",
    isLoading: true,
    currentlyPlaying: null,
    recentlyPlaying: null,
  }),
  actions: {
    setAccessToken(accessToken) {
      this.accessToken = accessToken;
    },
    async initSpotify() {
      const res = await $fetch(`https://accounts.spotify.com/api/token`, {
        method: "POST",
        query: {
          grant_type: "refresh_token",
          refresh_token: this.config.public.SPOTIFY_REFRESH_TOKEN,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(this.config.public.SPOTIFY_CLIENT_ID + ":" + this.config.public.SPOTIFY_CLIENT_SECRET),
        },
      });
      this.setAccessToken(res.access_token);
      await this.updateCurrentlyPlaying();

      setTimeout(() => {
        this.initSpotify();
      }, res.expires_in * 1000 - 60);
    },
    async updateCurrentlyPlaying() {
      const res = await useFetchSpotify("https://api.spotify.com/v1/me/player/currently-playing");
      if (!res || res.currently_playing_type != "track") {
        await this.getRecentlyPlayed();
        this.currentlyPlaying = null;
      } else {
        this.currentlyPlaying = res;
        this.isLoading = false;
        setTimeout(() => {
          this.updateCurrentlyPlaying();
        }, 1000);
      }
    },
    async getRecentlyPlayed() {
      const res = await useFetchSpotify("https://api.spotify.com/v1/me/player/recently-played?limit=1");
      console.log(res);
      this.recentlyPlaying = res.items[0].track;
      this.isLoading = false;
    },
  },
  getters: {
    progressBar: (state) => {
      if (state.currentlyPlaying) {
        return (state.currentlyPlaying.progress_ms / state.currentlyPlaying.item.duration_ms) * 100;
      } else {
        return 0;
      }
    },
    progressString: (state) => {
      const minutes = Math.floor(state.currentlyPlaying?.progress_ms / 60000);
      const seconds = (Math.floor(state.currentlyPlaying?.progress_ms / 1000) % 60).toString().padStart(2, "0");
      return `${minutes}:${seconds}`;
    },
    durationString: (state) => {
      const minutes = Math.floor(state.currentlyPlaying?.item?.duration_ms / 60000);
      const seconds = (Math.floor(state.currentlyPlaying?.item?.duration_ms / 1000) % 60).toString().padStart(2, "0");
      return `${minutes}:${seconds}`;
    },
  },
});
