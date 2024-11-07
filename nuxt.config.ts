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
    head: {
      title: "Hapis Hanipudin",
      meta: [{ name: "Portfolio Hapis Hanipudin", content: "Hapis Hanipudin adalah seorang web developer" }],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" },
      ],
    },
  },

  modules: ["@pinia/nuxt", "@nuxt/devtools", "@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/image"],
  compatibilityDate: "2024-11-05",
});
