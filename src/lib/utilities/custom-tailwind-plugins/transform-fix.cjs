const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		'.transform-fix': {
			transform: 'perspective(100px) translateZ(0) translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important',
		},
	})
})
