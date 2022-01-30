const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const dirPlugin = require('./src/utils/tailwind-plugins/dir.cjs')
const overflowPlugin = require('./src/utils/tailwind-plugins/overflow.cjs')

const config = {
  content: ['./src/**/*.{html,svelte}'],
	theme: {
		extend: {
			spacing: {
				16: '4rem',
				18: '4.5rem',
				22: '5.5rem',
				50: '12.5rem',
				62: '15.5rem',
				66: '16.5rem',
				88: '22rem',
				input: '3rem'
			},
			colors: {
				'body-bg': colors.gray['100'],
				'body-text': colors.gray['700'],
				gray: colors.gray,
				brand: {
					DEFAULT: '#3D42DF',
					deep: '#1F24C3',
				},
				red: {
					DEFAULT: '#FF3838',
				},
				pink: '#FCBCBC',
				yellow: {
					DEFAULT: '#FFBC00'
				},
			},
			maxWidth: theme => ({
				...theme('spacing'),
			}),
			minWidth: theme => theme('spacing'),
			minHeight: theme => theme('spacing'),
			lineHeight: { 0: '0' },
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
				21: '21',
			},
			scale: { '-1': -1 },
			inset: {
				'70/100': '70%',
				'75/100': '75%',
				'80/100': '80%',
				'85/100': '85%',
				'90/100': '90%',
			},
			fontSize: {
				'2xs': ['0.625rem', { lineHeight: '1' }],
			},
			borderWidth: {
				3: '3px',
				12: '12px',
			},
			cursor: { grab: 'grab' },
			outline: {
				gray: ['2px dotted ' + colors.gray['500'], '2px'],
				dark: ['2px dotted ' + colors.gray['400'], '2px'],
			},
			borderRadius: {
				DEFAULT: '.75rem',
				sm: '8px',
			},
			letterSpacing: {
				1: '.25em',
				2: '.5em',
				3: '.75em',
				4: '1em',
			},
			scale: {
				flip: '-1',
			},
			blur: {
				xs: '2px',
				sm: '4px',
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
			montserrat: 'Montserrat',
		},
		boxShadow: {
			sm: '0 0 10px 0 rgba(0, 0, 0, 2%)',
			md: '0 0 20px 0 rgba(0, 0, 0, 2%)',
			lg: '0 0 20px 0 rgba(0, 0, 0, 5%)',
			none: 'none',
		},
  },
  plugins: [
		require('@tailwindcss/line-clamp'),
		dirPlugin,
		overflowPlugin,
	],
}

module.exports = config
