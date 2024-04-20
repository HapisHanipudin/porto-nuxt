export default async function useFetchSpotify(url, options = {}) {
  const spotify = await useSpotifyStore();
  return await $fetch(url, {
    headers: {
      Authorization: `Bearer ${spotify.accessToken}`,
      ...options?.headers,
    },
    ...options,
  });
}
