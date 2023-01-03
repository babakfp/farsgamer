export const numberToPrice = number => {
	number = number.toString()
	let result = ""

	if (number.length <= 3) {
		return number
	} else if (number.length % 3 === 0) {
		for (let i = 0; i < number.length; i++) {
			result += number[i]
			if ((i + 1) % 3 === 0 && i + 1 !== number.length) {
				result += ","
			}
		}

		return result
	} else {
		const firstChars = number.slice(0, number.length % 3)
		const afterChars = number.slice(number.length % 3)

		for (let i = 0; i < afterChars.length; i++) {
			result += afterChars[i]
			if ((i + 1) % 3 === 0 && i + 1 !== afterChars.length) {
				result += ","
			}
		}

		return firstChars + "," + result
	}
}

export const priceToNumber = price => {
	let result = price.replaceAll(",", "")
	result = Number(result)
	return result
}
