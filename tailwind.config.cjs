const colors = require('tailwindcss/colors')
const tailwindCustomPlugins = require('./src/lib/utilities/tailwindCustomPlugins/index.cjs')
const addons = require('tailwindcss-addons')

const minMaxWidth = {
	'4/12': '33.333333%',
	'8/12': '66.666667%',
}

module.exports = {
	presets: [ addons.presets ],
  content: ['./src/**/*.{html,svelte}'],
	theme: {
		extend: {
			colors: {
				gray: colors.neutral,
				brand: {
					DEFAULT: '#7666ff',
					deep: '#614FFF',
				},
				yellow: {
					DEFAULT: '#FFBC00',
				},
			},
			spacing: {
				50: '12.5rem',
				66: '16.5rem',
				88: '22rem',
				header: 'var(--header)',
				page: 'var(--page)',
				input: 'var(--input)',
			},
			minWidth: minMaxWidth,
			maxWidth: minMaxWidth,
			borderWidth: {
				12: '12px',
			},
			letterSpacing: {
				1: '.25em',
				2: '.5em',
				3: '.75em',
				4: '1em',
			},
			contrast: {
				105: '1.05',
			},
		},
		screens: {
			'5xs': '360px',
			'4xs': '375px',
			'3xs': '400px',
			'2xs': '480px',
			xs: '576px',
			sm: '640px',
			md: '764px',
			'2md': '860px',
			lg: '1024px',
			'2lg': '1140px',
			xl: '1280px',
			'2xl': '1536px',
		},
    container: {
      center: true,
      padding: 'var(--page)'
    },
		borderRadius: {
			none: '0',
			DEFAULT: '10px',
			sm: '8px',
			full: '9999px',
		},
		fontFamily: {
      dana: [ '"Dana"' ],
      code: [ '"Dank Mono", "MonoLisa", "Dana"' ],
		},
    fontWeight: {
      // hairline: 50,
      // thin: 100,
      // extralight: 200,
      // light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      // extrabold: 800,
      // black: 900,
      // extrablack: 950,
      // heavy: 980,
      // fat: 990,
    },
		boxShadow: {
			sm: '0 0 .5rem rgba(15 23 42 / 2%)',
			md: '0 0 1.25rem rgba(15 23 42 / 4%)',
			lg: '0 0 1.5rem rgba(15 23 42 8%)',
			'b-sm-muted': '0 .25rem .375rem rgba(15 23 42 / 5%)',
			'b-sm': '0 .25rem .375rem rgba(15 23 42 / 10%)',
			none: 'none',
		},
  },
  plugins: [
		require('@tailwindcss/line-clamp'),
    ...tailwindCustomPlugins,
		addons.base,
		addons.utilities.dir,
		addons.utilities.drag,
		addons.utilities.flip,
		addons.utilities.hideShow,
		addons.utilities.insetCenter,
		addons.utilities.overflowUnset,
	],
}
