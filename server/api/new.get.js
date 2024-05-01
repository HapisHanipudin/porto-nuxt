export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  return {
    clientSecret: config.public.SPOTIFY_CLIENT_SECRET,
    clientId: config.public.SPOTIFY_CLIENT_ID,
    refreshToken: config.public.SPOTIFY_REFRESH_TOKEN,
  };
});
