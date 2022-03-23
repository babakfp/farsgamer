const plugin = require('tailwindcss/plugin')

const dir = plugin( ({ addUtilities }) => {
	addUtilities({
		'.dir-rtl': { 'direction': 'rtl' },
		'.dir-ltr': { 'direction': 'ltr' },
	})
})

module.exports = dir
