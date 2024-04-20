// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
      SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
      SPOTIFY_AUTH_CODE: process.env.SPOTIFY_AUTH_CODE,
      SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
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
