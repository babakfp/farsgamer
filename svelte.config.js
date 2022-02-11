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
          '$layouts': path.resolve('src/layouts'),
          '$store': path.resolve('src/store'),
          '$utils': path.resolve('src/utils'),
          'accordion': path.resolve('src/lib/accordion'),
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
