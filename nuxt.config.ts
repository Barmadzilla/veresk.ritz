// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		pageTransition: { name: "page", mode: "out-in" },
		head: {
			link: [
				{
					rel: "icon",
					sizes: "any",
					type: "image/svg+xml",
					href: "/favicons/favicon.svg",
				},
				{
					rel: "alternate icon",
					type: "image/x-icon",
					href: "/favicons/favicon-min.ico",
				},
			],
		},
	},

	css: [
		"~/assets/css/resets.css",
		"~/assets/css/font.css",
		"~/assets/css/vars.css",
		"~/assets/css/main.css",
	],
	routeRules: {
		"/contacts": { prerender: true },
		"/corporate-events": { prerender: true },
		"/business-events": { prerender: true },
		"/eco-park": { prerender: true },
		"/for-kids": { prerender: true },
	},

	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["vue-yandex-maps/nuxt", "@nuxt/image"],
	yandexMaps: {
		apikey: "37b45878-223f-4829-a0ba-4557ed2fdeaa",
	},
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
