const colors = require('tailwindcss/colors')
const directionUtilities = require('./src/utils/tailwind-utilities/direction.cjs')
const overflowUtilities = require('./src/utils/tailwind-utilities/overflow.cjs')

module.exports = {
  content: ['./src/**/*.{html,svelte}'],
	theme: {
		extend: {
			maxWidth: theme => theme('spacing'),
			minWidth: theme => theme('spacing'),
			minHeight: theme => theme('spacing'),
			maxHeight: theme => theme('spacing'),
			colors: {
				brand: {
					DEFAULT: '#7666FF',
					deep: '#614FFF',
				},
				red: {
					DEFAULT: '#FF3838',
				},
				yellow: {
					DEFAULT: '#FFBC00'
				},
				crisp: '#087EA4',
			},
			spacing: {
				16: '4rem',
				18: '4.5rem',
				22: '5.5rem',
				50: '12.5rem',
				62: '15.5rem',
				66: '16.5rem',
				88: '22rem',
				input: '3rem',
			},
			zIndex: { 
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
				6: '6',
				7: '7',
				8: '8',
				9: '9',
			},
			scale: {
				flip: '-1',
			},
			blur: {
				xs: '2px',
				sm: '4px',
			},
			ringWidth: {
        3: '3px',
      },
			borderRadius: {
				DEFAULT: '12px',
				sm: '8px',
			},
			borderWidth: {
				3: '3px',
				12: '12px',
			},
			outline: {
				gray: ['2px dotted ' + colors.gray['500'], '2px'],
				dark: ['2px dotted ' + colors.gray['400'], '2px'],
			},
			fontSize: {
				'2xs': ['0.625rem', { lineHeight: '1' }],
			},
			lineHeight: {
				0: '0',
			},
			letterSpacing: {
				1: '.25em',
				2: '.5em',
				3: '.75em',
				4: '1em',
			},
			cursor: {
				grab: 'grab',
			},
		},
		screens: {
			'4xs': '375px',
			'3xs': '400px',
			'2xs': '480px',
			xs: '576px',
			sm: '640px',
			md: '768px',
			'2md': '840px',
			lg: '1024px',
			'2lg': '1140px',
			xl: '1280px',
			'2xl': '1536px',
			'3xl': '1800px',
		},
		fontFamily: {
			dana: 'Dana',
			danafn: 'DanaFN',
			montserrat: ['Montserrat', 'Dana'],
		},
		boxShadow: {
			sm: '0 0 .5rem rgba(15, 23, 42, .02)',
			md: '0 0 1.25rem rgba(15, 23, 42, .04)',
			lg: '0 0 1.5rem rgba(15, 23, 42, .08)',
			none: 'none',
		},
  },
  plugins: [
		require('@tailwindcss/line-clamp'),
		directionUtilities,
		overflowUtilities,
	],
}
