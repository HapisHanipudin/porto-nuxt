// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      SpotifyClientId: process.env.SPOTIFY_CLIENT_ID,
      SpotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      SpotifyRefreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
    },
  },
  app: {
    head: {
      title: "Hapis Hanipudin",
      meta: [{ name: "Portfolio Hapis Hanipudin", content: "Hapis Hanipudin adalah seorang web developer" }],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" },
      ],
    },
  },

  modules: ["@pinia/nuxt", "@nuxt/devtools", "@nuxtjs/tailwindcss"],
});
