/**
	* Uses RGB formatted color as CSS-Var and returns RGB formatted color
	* @param {string} cssVar Example: --white. Format: 255, 255, 255
*/
const cssVarColor = (cssVar) => {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${cssVar}))`
		}
		return `rgba(var(${cssVar}) / ${opacityValue})`
	}
}

module.exports = {
	cssVarColor,
}
