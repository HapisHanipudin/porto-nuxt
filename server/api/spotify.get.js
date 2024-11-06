import { getAccessToken, getNowPlaying, getRecentlyPlayed } from "../utils/spotify";

import client from "../utils/redis";

export default defineEventHandler(async (event) => {
  const res = {
    litsening: false,
    isPlaying: false,
    track: null,
    progress: null,
  };

  let accessToken = await client.get("spotifyAccessToken");

  if (!accessToken) {
    const { access_token: token } = await getAccessToken();
    accessToken = token;
  }

  const nowPlaying = await getNowPlaying(accessToken);
  if (nowPlaying && nowPlaying.currently_playing_type == "track") {
    res.litsening = nowPlaying.is_playing;
    res.isPlaying = nowPlaying.is_playing;
    res.track = nowPlaying.item;
    res.progress = nowPlaying.progress_ms;
  } else {
    const recentlyPlayed = await getRecentlyPlayed(accessToken);
    if (recentlyPlayed) {
      res.litsening = false;
      res.track = recentlyPlayed.items[0].track;
    }
  }
  return res;
});
