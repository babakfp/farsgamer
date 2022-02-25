const plugin = require('tailwindcss/plugin')

const overflow = plugin( ({ addUtilities }) => {
	addUtilities({
		'.overflow-unset': { 'overflow': 'unset' },
		'.overflow-y-unset': { 'overflow-y': 'unset' },
		'.overflow-x-unset': { 'overflow-x': 'unset' },
	})
})

module.exports = overflow
