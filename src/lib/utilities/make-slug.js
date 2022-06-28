export const makeSlug = text => {
	return text.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '');
}
