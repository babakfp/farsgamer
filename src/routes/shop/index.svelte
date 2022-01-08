<script>
	import SelectBoxes from './lib/SelectBoxes.svelte'
	import ProductCard from '$lib/ProductCard.svelte'
	import Pagination from '$lib/Pagination.svelte'
</script>

<SelectBoxes />

<div class="grid grid-cols-2 gap-4 mt-8 sm:gap-6 sm:grid-cols-3 md2:grid-cols-4 lg:grid-cols-3 lg2:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
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
