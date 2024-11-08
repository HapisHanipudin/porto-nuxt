import client from "./redis";

// This gets the access token from Spotify to connect to the API using provided refresh token.
export const getAccessToken = async () => {
  const config = useRuntimeConfig();
  const response = await $fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa(`${config.public.SpotifyClientId}:${config.public.SpotifyClientSecret}`)}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: config.public.SpotifyRefreshToken,
      client_id: config.public.SpotifyClientId,
    }),
  });

  await client.setEx("spotifyAccessToken", response.expires_in - 60, response.access_token);

  return response;
};

// Get the current now playing track of given user access token.
export const getNowPlaying = async (accessToken) => {
  return await $fetch("https://api.spotify.com/v1/me/player/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const getRecentlyPlayed = async (accessToken) => {
  return await $fetch("https://api.spotify.com/v1/me/player/recently-played", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    query: {
      limit: 1,
    },
  });
};
