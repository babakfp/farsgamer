import products from '$database/products.js'

export async function GET({ params }) {
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