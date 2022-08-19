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
	// },
])

export const walletBalance = writable('walletBalance', '100,000')

export const discounts = writable('discounts', [
	{
		id: 1,
		code: '25BOFF',
		type: 'bucks',
		value: 25,
	},
	{
		id: 2,
		code: '25POFF',
		type: 'percent',
		value: 25,
	},
])

export const cartDiscountInUse = writable(null)
