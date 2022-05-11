import path from 'path'
import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-vercel'

export default {
  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          '$lib': path.resolve('src/lib'),
          '$layouts': path.resolve('src/layouts'),
          '$partials': path.resolve('src/partials'),
          '$store': path.resolve('src/store'),
          '$utils': path.resolve('src/utils'),
          '$db': path.resolve('src/store/db'),
        },
      },
    },
  },
  preprocess: [
		sveltePreprocess({
			postcss: true,
		}),
	],
}
