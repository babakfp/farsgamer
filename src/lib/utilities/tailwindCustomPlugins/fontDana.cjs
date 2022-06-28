const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities }) {
  addUtilities({
    '.font-dana-fn': {
      '-moz-font-feature-settings': '"ss02"',
      '-webkit-font-feature-settings': '"ss02"',
      'font-feature-settings': '"ss02"',
    },
    '.font-dana-en': {
      '-moz-font-feature-settings': 'unset',
      '-webkit-font-feature-settings': 'unset',
      'font-feature-settings': 'unset',
    },
    '.font-dana-mono': {
      '-moz-font-feature-settings': '"ss03"',
      '-webkit-font-feature-settings': '"ss03"',
      'font-feature-settings': '"ss03"',
    },
  })
})
