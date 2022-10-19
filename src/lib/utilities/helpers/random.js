/**
 * Generate random string like: 1dce2bb6d7a36a
*/
export const getRandomString =()=> {
	return (Math.random() * 10e15).toString(16)
}

export const getRandomNumber = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
