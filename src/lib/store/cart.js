import { writable } from 'svelte-local-storage-store'

export const cartItems = writable('cartItems', [
	// {
	// 	id: 1,
	// 	title: 'گیف کارد 20 دلاری استیم',
	// 	src: '/img/products/product-thumb (1).png',
	// 	price: '100,000',
	// 	account: {
	// 		category: 'PlayStation',
	// 		email: 'example@gmail.com',
	// 		password: 14011400,
	// 	},
	// 	fastDelivery: true,
	// 	unitInCart: 1,
	// },
])
