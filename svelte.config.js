import adapter from '@sveltejs/adapter-vercel'
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    adapter: adapter(),
    alias: {
      $layouts: 'src/lib/components/layouts',
      $components: 'src/lib/components/reusable',
      $partials: 'src/lib/components/partials',
      $store: 'src/lib/store',
      $database: 'src/lib/store/database',
      $utilities: 'src/lib/utilities',
    },
  },
  preprocess: [
		sveltePreprocess({ postcss: true }),
	],
}
