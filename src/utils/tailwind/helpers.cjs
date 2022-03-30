/**
 * @param {string} rgbColor Format: 255, 255, 255
 */
const colorTakeRgb = rgbColor => {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(${rgbColor})`
		}
		return `rgba(${rgbColor}, ${opacityValue})`
	}
}

/**
 * Uses RGB formatted ccolor as CSS-Var and returns RGB formatted color
 * @param {string} colorAsCssVar Example: --brand. Format: 255, 255, 255
 */
const colorCssVar = colorAsCssVar => {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${colorAsCssVar}))`
		}
		return `rgba(var(${colorAsCssVar}), ${opacityValue})`
	}
}

/**
 * Takes a Tailwind's color{object} and converts the value of each color to CSS-Var
 * @param {string} colorName Example: 'gray'
 * @param {object} colors Example: colors.neutral
 */
const colorObjCssVar = (colorName, colors) => {
	let newColors = {}
	for (const [key, value] of Object.entries(colors)) {
		newColors[key] = colorCssVar(`--${colorName}-${key}`)
	}
	return newColors
}

module.exports = { colorCssVar, colorObjCssVar }
