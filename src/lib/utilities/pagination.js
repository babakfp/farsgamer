/**
	Gets current pages items (products/posts)
 * @param {array} items - Products, posts or etc.
 * @param {number} currentPageNumber
 * @param {number} pageSize - Number of items on each page.
*/
export const getPaginationItems = (items, currentPageNumber, pageSize = 10) => {
	return items.slice((currentPageNumber - 1) * pageSize, currentPageNumber * pageSize)
}

/**
	Gets how many pages the avalible items (products/posts) can create
 * @param {array} items - Products, posts or etc.
 * @param {number} pageSize - Number of items on each page.
*/
export const getPaginationMaxNumberOfPages = (items, pageSize = 10) => {
	return Math.ceil(items.length / pageSize)
}
