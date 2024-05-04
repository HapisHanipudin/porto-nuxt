import { defineStore } from "pinia";

export const useSpotifyStore = defineStore({
  id: "mySpotifyStore",
  state: () => ({
    litsening: false,
    isPlaying: false,
    track: {},
    progress: 0,
    loaded: false,
    isLoading: true,
  }),
  actions: {
    async initSpotify() {
      const { litsening, isPlaying, track, progress } = await $fetch("/api/spotify");

      this.litsening = litsening;
      this.isPlaying = isPlaying;
      this.track = track;
      this.progress = progress;
      this.loaded = true;
      this.isLoading = false;
      if (this.litsening) {
        const intervalId = setInterval(async () => {
          if (this.progress < this.track.duration_ms) {
            this.progress += 1000;
            await this.initSpotify();
          } else {
            clearInterval(intervalId);
            this.initSpotify();
          }
        }, 1000);
      }
    },
  },
  getters: {
    progressBar(state) {
      if (state.litsening) {
        return (state.progress / state.track?.duration_ms) * 100;
      } else {
        return 0;
      }
    },
    progressString(state) {
      const minutes = Math.floor(state.progress / 60000);
      const seconds = (Math.floor(state.progress / 1000) % 60).toString().padStart(2, "0");
      return `${minutes}:${seconds}`;
    },
    durationString(state) {
      const minutes = Math.floor(state.track?.duration_ms / 60000);
      const seconds = (Math.floor(state.track?.duration_ms / 1000) % 60).toString().padStart(2, "0");
      return `${minutes}:${seconds}`;
    },
  },
});
