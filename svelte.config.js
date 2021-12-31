import path from 'path'
import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-vercel'

const config = {
  kit: {
    target: '#svelte',
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          '$lib': path.resolve('./src/lib'),
          '$layout': path.resolve('./src/layout'),
          '$store': path.resolve('./src/store'),
          '$util': path.resolve('./src/util'),
        },
      },
    },
  },
  preprocess: [
		sveltePreprocess(
			{
				postcss: true,
			}
		)
	],
}

export default config
