import { writable } from 'svelte-local-storage-store'

export const cartItems = writable('cartItems', [
	// {
	// 	id: 1,
	// 	title: 'گیفت‌کارد 20 دلاری استیم',
	// 	thumb: '/img/products/fortnite/thumb-1.jpg',
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
		code: '2MLBmu',
		type: 'bucks',
		value: 25_000,
	},
])

export const cartDiscountInUse = writable(null)
