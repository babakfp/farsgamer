const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addComponents }) {
	addComponents({
		'.img-hover': {
			'> img': {
				'@apply duration-200': {},
			},
			'&:hover > img': {
				'@apply opacity-90': {},
			},
		},
	})
})
