import path from 'path'
import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    adapter: adapter(),
    alias: {
      '$lib': 'src/lib',
      '$layouts': 'src/layouts',
      '$partials': 'src/partials',
      '$store': 'src/store',
      '$utils': 'src/utils',
      '$db': 'src/store/db',
    },
  },
  preprocess: [
		sveltePreprocess({
			postcss: true,
		}),
	],
}
