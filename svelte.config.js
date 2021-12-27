import path from 'path'
import adapter from '@sveltejs/adapter-vercel'

const config = {
	kit: {
		target: '#svelte',
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					':lib': path.resolve('./src/lib'),
					':store': path.resolve('./src/store'),
					':util': path.resolve('./src/util'),
				},
			},
		},
	},
}

export default config
