<script>
	import { page } from '$app/stores'
	import SelectBoxes from './_lib/SelectBoxes.svelte'
	import ProductCard from '$components/ProductCard.svelte'
	import Pagination from '$components/Pagination.svelte'
	import { products } from '$database/products.js'
	import { getPaginationItems, getPaginationMaxNumberOfPages } from '$utilities/pagination.js'
	$: currentPageNumber = $page.url.searchParams.get('page') ? Number( $page.url.searchParams.get('page') ) : 1
</script>

<svelte:head>
	<title>فروشگاه</title>
</svelte:head>

<SelectBoxes />

<div class="grid gap-4 mt-8 grid-cols-2 sm:gap-6 sm:grid-cols-3 2md:grid-cols-4 lg:grid-cols-3 2lg:grid-cols-4 xl:grid-cols-5">
	{#each getPaginationItems(products, currentPageNumber) as product (product.id)}
		<ProductCard
			id={product.id}
			thumb={product.thumb}
			title={product.title}
			price={product.price}
		/>
	{/each}
</div>

<Pagination {currentPageNumber} maxNumberOfPage={getPaginationMaxNumberOfPages(products)} baseUrl={'/shop'} />
