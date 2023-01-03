import { error } from "@sveltejs/kit"
import { products } from "$database/products.js"

export async function load({ params }) {
	const product = products.find(prd => prd.id === Number(params.id))

	if (product) {
		/**
		 * (product.belongsTo === belongsTo) - Get the products from the same category.
		 * (product.id !== id) - Don't get the product that is already viewing in single product page.
		 */
		const relatedProducts = products.filter(
			prd => prd.belongsTo === product.belongsTo && prd.id !== product.id
		)

		return {
			product,
			relatedProducts,
		}
	}

	throw error(404, "Not found")
}
