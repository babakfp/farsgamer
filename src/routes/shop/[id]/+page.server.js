import { products } from '$database/products.js'

export async function load({ params }) {
	const item = products.find(product => product.id === Number(params.id))

	if (item) {
    return { product: item }
  }

  throw error (404, 'Not found')
}