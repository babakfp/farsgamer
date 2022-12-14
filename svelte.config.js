import adapter from "@sveltejs/adapter-vercel"
import sveltePreprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		adapter: adapter(),
		alias: {
			$layouts: "src/lib/layouts",
			$components: "src/lib/components",
			$partials: "src/lib/partials",
			$store: "src/lib/store",
			$database: "src/lib/store/database",
			$utilities: "src/lib/utilities",
		},
	},
	preprocess: [sveltePreprocess({ postcss: true })],
	// Disable Svelte A11Y warnings in the console
	onwarn: (warning, handler) => {
		if (warning.code.startsWith("a11y-")) {
			return
		}
		handler(warning)
	},
}
