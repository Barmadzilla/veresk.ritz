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
  imports: {
    dirs: [
      // Scan top-level composables
      // '~/composables',
      // ... or scan composables nested one level deep with a specific name and file extension
      // '~/composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all composables within given directory
      "~/composables/**",
    ],
  },
  // routeRules: {
  //   // Generates a 200.html for client-side routing fallbacks
  //   "/200.html": { prerender: true },
  //
  //   // Generates a 404.html if your host relies on it for page misses
  //   "/404.html": { prerender: true },
  // },
  nitro: { prerender: { crawlLinks: true, routes: ["/", "/404.html"] } },
});
