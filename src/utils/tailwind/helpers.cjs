const colorTakeRgb = value => {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(${value})`
		}
		return `rgba(${value}, ${opacityValue})`
	}
}

const colorCssVar = value => {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${value}))`
		}
		return `rgba(var(${value}), ${opacityValue})`
	}
}

const colorObjCssVar = (name, colors) => {
	let newColors = {}
	for (const [key, value] of Object.entries(colors)) {
		newColors[key] = colorCssVar(`--${name}-${key}`)
	}
	return newColors
}

module.exports = { colorCssVar, colorObjCssVar }
