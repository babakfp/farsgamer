const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const plugin_flip = require('./src/utils/tailwind-plugins/flip.cjs')
const plugin_dir = require('./src/utils/tailwind-plugins/dir.cjs')

const config = {
  content: ['./src/**/*.{html,svelte}'],
	theme: {
		extend: {
			spacing: {
				7.5: '1.875rem',
				12.5: '3.125rem',
				13: '3.25rem',
				16: '4rem',
				17: '4.25rem',
				17.5: '4.375rem',
				18: '4.5rem',
				19: '4.75rem',
				22: '5.5rem',
				38: '9.5rem',
				50: '12.5rem',
				54: '13.5rem',
				66: '16.5rem',
				68: '17rem',
				76: '19rem',
				82: '20.5rem',
				84: '21rem',
				88: '22rem',
				92: '23rem',
				100: '25rem',
			},
			colors: {
				'body-bg': colors.gray['100'],
				'body-text': colors.gray['700'],
				gray: colors.gray,
				brand: {
					DEFAULT: '#3D42DF',
					deep: '#1F24C3',
					deeper: '#10159D',
				},
				red: {
					DEFAULT: '#FF3838',
				},
				pink: '#FCBCBC',
				yellow: '#FFBC00',
				'light-green': '#8EFAAB',
				gray2: {
					DEFAULT: 'gray',
					50: '#F8F9FB',
					100: '#F1F1F1',
					500: '#BDBDC7',
					700: '#808191',
				},
			},
			maxWidth: theme => ({
				...theme('spacing'),
				'70/100': '70%',
				'75/100': '75%',
				'80/100': '80%',
				'85/100': '85%',
				'90/100': '90%',
				'6xl': '72rem',
				'7xl': '80rem',
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
			borderWidth: { 3: '3px' },
			cursor: { grab: 'grab' },
			outline: {
				gray: ['2px dotted ' + colors.gray['500'], '2px'],
				dark: ['2px dotted ' + colors.gray['400'], '2px'],
			},
			borderRadius: {
				DEFAULT: '.75rem',
				sm: '8px',
			},
		},
		screens: {
			'2xs': '400px',
			'xss': '480px',
			xs: '576px',
			sm: '640px',
			md: '768px',
			'2md2': '840px',
			'2md': '894px',
			lg: '1024px',
			xl: '1280px',
			'xl2': '1348px',
			'2xl': '1536px',
			'3xl': '1800px',
		},
		container: {
			center: true,
			padding: '1rem',
		},
		fontFamily: {
			montserrat: ['Montserrat'],
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
		plugin_flip,
		plugin_dir,
	],
}

module.exports = config
