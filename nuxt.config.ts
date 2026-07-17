// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  css: [
    "~/assets/css/resets.css",
    "~/assets/css/font.css",
    "~/assets/css/vars.css",
    "~/assets/css/main.css",
  ],

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
});
