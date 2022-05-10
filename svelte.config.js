import path from 'path'
import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-vercel'

const config = {
  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          '$lib': path.resolve('src/lib'),
          '$partials': path.resolve('src/partials'),
          '$layouts': path.resolve('src/lib/layouts'),
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
		})
	],
}

export default config
