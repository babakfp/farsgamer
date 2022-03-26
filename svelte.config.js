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
          '$layouts': path.resolve('src/lib/layouts'),
          '$store': path.resolve('src/store'),
          '$utils': path.resolve('src/utils'),
          '$db': path.resolve('src/store/db'),
          'Accordion': path.resolve('src/lib/Accordion'),
          'Tab': path.resolve('src/lib/Tab'),
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
