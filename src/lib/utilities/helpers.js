/**
 * Generate random string like: 1dce2bb6d7a36a
*/
export const getRandomString =_=> {
	return (Math.random() * 10e15).toString(16)
}
