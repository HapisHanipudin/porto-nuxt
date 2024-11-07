// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  image: {
    domains: ["i.scdn.co/"],
  },

  runtimeConfig: {
    public: {
      SpotifyClientId: process.env.SPOTIFY_CLIENT_ID,
      SpotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      SpotifyRefreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
      RedisUrl: process.env.REDIS_URL,
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: { lang: "en" },
      title: "Hapis Hanipudin",
      meta: [
        { name: "Portfolio Hapis Hanipudin", content: "Hapis Hanipudin adalah seorang web developer" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:image", content: "https://hapishanipudin.com/img/squarelogo.webp" },
      ],
    },
  },

  modules: ["@pinia/nuxt", "@nuxt/devtools", "@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/image"],
  compatibilityDate: "2024-11-05",
});
