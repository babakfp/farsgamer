import products from '$db/products.js'

export async function get({ params }) {
	const item = products.find(product => product.id === Number(params.id))

	if (item) {
    return {
      body: { product: item }
    }
  }

  return {
    status: 404
  }
}