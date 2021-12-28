const plugin = require('tailwindcss/plugin')

const flip = plugin( ({ addUtilities }) => {
	addUtilities({
		'.flip-x': {
			'--tw-scale-x': '-1',
			'transform': 'var(--tw-transform)',
		},
		'.flip-y': {
			'--tw-scale-y': '-1',
			'transform': 'var(--tw-transform)',
		},
	})
})

module.exports = flip
