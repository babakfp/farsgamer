<script>
	import { page } from '$app/stores'
	import ProductCard from '$components/ProductCard.svelte'
	import Pagination from '$components/Pagination.svelte'
	import { products } from '$database/products.js'
	import { getPaginationItems, getPaginationMaxNumberOfPages } from '$utilities/pagination.js'
	import Select from '$components/Select.svelte'

	$: currentPageNumber = $page.url.searchParams.get('page') ? Number( $page.url.searchParams.get('page') ) : 1

	const categoryItems = [
		{ group: 'فورتنایت | Fortnite', label: 'ویباکس | V-Bucks', value: 'v-bucks' },
		{ group: 'فورتنایت | Fortnite', label: 'باندل‌ها', value: 'bundles' },
		{ group: 'فورتنایت | Fortnite', label: 'آیتم‌های بازی', value: 'game-items' },

		{ group: 'گیفت کارد | Gift Card', label: 'PlayStation', value: 'gift-card[play-station]' },
		{ group: 'گیفت کارد | Gift Card', label: 'Steam', value: 'gift-card[steam]' },
		{ group: 'گیفت کارد | Gift Card', label: 'Xbox', value: 'gift-card[xbox]' },
		{ group: 'گیفت کارد | Gift Card', label: 'Google Play', value: 'gift-card[google-play]' },
		
		{ group: 'تجهیزات بازی | Gaming', label: 'مانیتور', value: 'pc[monitor]' },
		{ group: 'تجهیزات بازی | Gaming', label: 'کیبورد', value: 'pc[keyboard]' },
		{ group: 'تجهیزات بازی | Gaming', label: 'موس', value: 'pc[mouse]' },
	]

	const sortItems = [
		{ label: 'محبوب ترین', value: 'most-popular' },
		{ label: 'پرفروش ترین', value: 'best-seller' },
		{ label: 'ارزان ترین', value: 'cheapest' },
		{ label: 'گران ترین', value: 'most-expensive' },
	]

	const groupBy = item => item.group
</script>

<svelte:head>
	<title>فروشگاه</title>
</svelte:head>

<!-- Filters -->
<div class="grid gap-4 3xs:flex">
	<Select items={categoryItems} {groupBy} placeholder="دســتـه بــنــدی" />
	<Select items={sortItems} {groupBy} placeholder="مــرتـــب ســازی" />
</div>

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
