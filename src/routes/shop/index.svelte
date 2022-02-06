<script>
	import SelectBoxes from './_lib/SelectBoxes.svelte'
	import ProductCard from '$lib/ProductCard.svelte'
	import Pagination from '$lib/Pagination.svelte'
</script>

<svelte:head>
	<title>فروشگاه</title>
</svelte:head>

<SelectBoxes />

<div class="grid gap-4 mt-8 grid-cols-2 sm:gap-6 sm:grid-cols-3 2md:grid-cols-4 lg:grid-cols-3 2lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6">
	<ProductCard />
	<ProductCard />
	<ProductCard />
	<ProductCard />
	<ProductCard />
	<ProductCard />
	<ProductCard />
	<ProductCard />
	<ProductCard />
	<ProductCard />
	<ProductCard />
	<ProductCard />
	<ProductCard />
	<ProductCard />
	<ProductCard />
</div>

<Pagination />
