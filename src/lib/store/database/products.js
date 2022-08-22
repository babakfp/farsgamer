import { comments as postComments } from './posts.js'

const comments = postComments.filter((post, i) => {
  if (i % 2) {
    post.isBuyer = false
    post.rating = 4
  } else {
    post.isBuyer = true
    post.rating = 5
  }
  return post
})

export const product = {
	id: 1,
	title: 'پک فورست لجند | Forst Legends pack',
	price: '200,000',
	images: [
		'/img/products/product-thumb (1).png',
		'/img/products/product-thumb (2).png',
		'/img/products/product-thumb (3).png',
		'/img/products/product-thumb (4).png',
		'/img/products/product-thumb (5).png',
	],
	rating: 5,
	ratingCount: 450,
	coins: 300,
	comments: comments,
	questionsAndAnswers: postComments,
	accountCategories: [
		{
			id: 1,
			title: 'PlayStation',
		},
		{
			id: 2,
			title: 'EpicGames',
		},
		{
			id: 3,
			title: 'XBox',
		},
		{
			id: 4,
			title: 'Nitendo',
		},
	],
}

export const products = [
	product,
]
