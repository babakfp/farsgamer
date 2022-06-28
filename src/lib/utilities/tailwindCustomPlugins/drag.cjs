const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities }) {
  addUtilities({
    '.drag-none': {
      '-webkit-user-drag': 'none',
    },
    '.drag-element': {
      '-webkit-user-drag': 'element',
    },
    '.drag-auto': {
      '-webkit-user-drag': 'auto',
    },
  })
})
