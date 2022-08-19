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
		code: '100POFF',
		type: 'percent',
		value: 100,
	},
	{
		code: '50POFF',
		type: 'percent',
		value: 50,
	},
	{
		code: '100BOFF',
		type: 'bucks',
		value: 100,
	},
	{
		code: '50BOFF',
		type: 'bucks',
		value: 50,
	},
])
