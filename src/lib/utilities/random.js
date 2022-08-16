/**
 * Generate random string like: 1dce2bb6d7a36a
*/
export const random =_=> {
	return (Math.random() * 10e15).toString(16)
}
