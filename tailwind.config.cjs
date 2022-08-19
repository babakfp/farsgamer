const colors = require('tailwindcss/colors')
const tailwindCustomPlugins = require('./src/lib/utilities/tailwindCustomPlugins/index.cjs')

module.exports = {
  content: ['./src/**/*.{html,svelte}'],
	theme: {
		extend: {
			minWidth: theme => {
        return {
          ...theme('spacing'),
          '4/12': '33.333333%',
          '8/12': '66.666667%',
        }
      },
			maxWidth: theme => {
        return {
          ...theme('spacing'),
          '4/12': '33.333333%',
          '8/12': '66.666667%',
        }
      },
			minHeight: theme => theme('spacing'),
			maxHeight: theme => theme('spacing'),
			colors: {
				gray: colors.neutral,
				brand: {
					DEFAULT: '#7666ff',
					deep: '#614FFF',
				},
				red: {
					DEFAULT: '#FF3838',
				},
				yellow: {
					DEFAULT: '#FFBC00'
				},
			},
			spacing: {
				16: '4rem',
				18: '4.5rem',
				22: '5.5rem',
				50: '12.5rem',
				62: '15.5rem',
				66: '16.5rem',
				88: '22rem',
				header: 'var(--header)',
				page: 'var(--page)',
				input: '3rem',
			},
			zIndex: { 
				1: '1',
				2: '2',
				3: '3',
			},
			scale: {
				flip: '-1',
        25: '.25',
			},
			blur: {
				xs: '2px',
				sm: '4px',
			},
			ringWidth: {
        3: '3px',
      },
			borderWidth: {
				3: '3px',
				12: '12px',
			},
			outlineOffset: {
				'-2': '-2px',
				'-4': '-4px',
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
      dana: [ 'dana' ],
		},
    fontWeight: {
      hairline: 50,
      thin: 100,
      extralight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
      extrablack: 950,
      heavy: 980,
      fat: 990,
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
	],
}
