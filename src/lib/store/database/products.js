import { priceToNumber } from '$utilities/helpers'
import { createProductQuestionsAndAnswers, createProductComments } from './helpers.js'

/**
 * Create the data for a product.
*/
const generateProductData = ({ id, title, belongsTo, price = {
	beforeDiscount: null,
	afterDiscount: null,
}, imgIndex }) => {
	return {
		id,
		title,
		belongsTo,
		price,
		thumb: `/img/products/${belongsTo}/${imgIndex}-thumb.jpg`,
		poster: `/img/products/${belongsTo}/${imgIndex}-poster.jpg`,
		rating: 5,
		ratingCount: 450,
		coins: Math.trunc( priceToNumber(price.afterDiscount || price.beforeDiscount) / 100 ),
		reviews: createProductComments(),
		questionsAndAnswers: createProductQuestionsAndAnswers(),
		accountCategories: [
			{ id: 1, title: 'PlayStation' },
			{ id: 2, title: 'EpicGames' },
			{ id: 3, title: 'XBox' },
			{ id: 4, title: 'Nitendo' },
		],
	}
}

export const products = [
	// Fortnite ---------
	generateProductData({
		id: 1,
		imgIndex: 1,
		title: '13,500 V-Bucks',
		belongsTo: 'fortnite',
		price: { beforeDiscount: '79,000' },
	}),
	generateProductData({
		id: 2,
		imgIndex: 2,
		title: '5,000 V-Bucks',
		belongsTo: 'fortnite',
		price: { beforeDiscount: '31,900', afterDiscount: '29,000' },
	}),
	generateProductData({
		id: 3,
		imgIndex: 3,
		title: '2,800 V-Bucks',
		belongsTo: 'fortnite',
		price: { beforeDiscount: '19,000' },
	}),
	generateProductData({
		id: 4,
		imgIndex: 4,
		title: '1,000 V-Bucks',
		belongsTo: 'fortnite',
		price: { beforeDiscount: '9,000', afterDiscount: '7,900' },
	}),
	generateProductData({
		id: 5,
		imgIndex: 5,
		title: 'Magma Masters Pack',
		belongsTo: 'fortnite',
		price: { beforeDiscount: '14,900' },
	}),
	generateProductData({
		id: 6,
		imgIndex: 6,
		title: 'Lava Legends Pack',
		belongsTo: 'fortnite',
		price: { beforeDiscount: '15,900' },
	}),
	generateProductData({
		id: 7,
		imgIndex: 7,
		title: 'Minty Legends Pack',
		belongsTo: 'fortnite',
		price: { beforeDiscount: '19,900' },
	}),
	generateProductData({
		id: 8,
		imgIndex: 8,
		title: 'Summer Legends Pack',
		belongsTo: 'fortnite',
		price: { beforeDiscount: '15,900' },
	}),
	generateProductData({
		id: 9,
		imgIndex: 9,
		title: 'Rogue Alias Pack',
		belongsTo: 'fortnite',
		price: { beforeDiscount: '3,900' },
	}),
	generateProductData({
		id: 10,
		imgIndex: 10,
		title: 'Skate Park Royalty Pack',
		belongsTo: 'fortnite',
		price: { beforeDiscount: '15,900' },
	}),
	generateProductData({
		id: 11,
		imgIndex: 11,
		title: 'Sapphire Hagiri Quest Pack',
		belongsTo: 'fortnite',
		price: { beforeDiscount: '11,900', afterDiscount: '10,000' },
	}),
	// Fall Guys ---------
	generateProductData({
		id: 12,
		imgIndex: 1,
		title: '13,500 Show-Bucks',
		belongsTo: 'fall-guys',
		price: { beforeDiscount: '111,920', afterDiscount: '110,000' },
	}),
	generateProductData({
		id: 13,
		imgIndex: 2,
		title: '5,000 Show-Bucks',
		belongsTo: 'fall-guys',
		price: { beforeDiscount: '43,920', afterDiscount: '42,000' },
	}),
	generateProductData({
		id: 14,
		imgIndex: 3,
		title: '2,800 Show-Bucks',
		belongsTo: 'fall-guys',
		price: { beforeDiscount: '27,920', afterDiscount: '27,000' },
	}),
	generateProductData({
		id: 15,
		imgIndex: 4,
		title: '1,000 Show-Bucks',
		belongsTo: 'fall-guys',
		price: { beforeDiscount: '11,120', afterDiscount: '10,000' },
	}),
	generateProductData({
		id: 16,
		imgIndex: 5,
		title: 'Starter Pack',
		belongsTo: 'fall-guys',
		price: { beforeDiscount: '13,900' },
	}),
	generateProductData({
		id: 17,
		imgIndex: 6,
		title: 'Popping Whizzbanger Pack',
		belongsTo: 'fall-guys',
		price: { beforeDiscount: '5,520' },
	}),
	generateProductData({
		id: 18,
		imgIndex: 7,
		title: 'Neigh Neigh Pack',
		belongsTo: 'fall-guys',
		price: { beforeDiscount: '5,520', afterDiscount: '4,900' },
	}),
	generateProductData({
		id: 19,
		imgIndex: 8,
		title: 'Wildfire Pack',
		belongsTo: 'fall-guys',
		price: { beforeDiscount: '27,920', afterDiscount: '27,000' },
	}),
].reverse()
