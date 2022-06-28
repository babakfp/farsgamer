const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities }) {
  addUtilities({
    '.dir-rtl': {
      'direction': 'rtl',
    },
    '.dir-ltr': {
      'direction': 'ltr',
    },
  })
})
