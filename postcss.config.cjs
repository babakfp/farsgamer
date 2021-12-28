const tailwindCss = require('tailwindcss')
const autoPrefixer = require('autoprefixer')
const postcssImport = require('postcss-import')
const postcssNested = require('postcss-nested')


const dev = process.env.NODE_ENV === 'development'

const config = {
  plugins: [
		postcssImport(),
		postcssNested(),
    tailwindCss(),
    !dev && autoPrefixer(),
  ],
}

module.exports = config
