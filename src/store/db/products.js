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

export default [
	{
		id: 1,
		title: 'پک فورست لجند | Forst Legends pack',
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
	}
]
