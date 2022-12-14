const plugin = require("tailwindcss/plugin")

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		".font-dana-fn": {
			"-moz-font-feature-settings": '"ss02"',
			"-webkit-font-feature-settings": '"ss02"',
			"font-feature-settings": '"ss02"',
		},
		".font-dana-en": {
			"-moz-font-feature-settings": "normal",
			"-webkit-font-feature-settings": "normal",
			"font-feature-settings": "normal",
		},
		".font-dana-mono": {
			"-moz-font-feature-settings": '"ss03"',
			"-webkit-font-feature-settings": '"ss03"',
			"font-feature-settings": '"ss03"',
		},
	})
})
