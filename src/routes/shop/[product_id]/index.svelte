<script>
	import Gallery from './_lib/Gallery.svelte'
	import MainInfo from './_lib/MainInfo.svelte'
	import PurchaseForm from './_lib/PurchaseForm.svelte'
	import PosttypeContent from './_lib/PosttypeContent.svelte'
	import BestSellerProducts from '$lib/home/BestSellerProducts.svelte'

	let thumbsSwiper
	const images = [
		'/img/products/product-thumb (1).png',
		'/img/products/product-thumb (2).png',
		'/img/products/product-thumb (3).png',
		'/img/products/product-thumb (4).png',
		'/img/products/product-thumb (5).png',
	]
</script>

<svelte:head>
	<title>عنوان محصول</title>
</svelte:head>

<section class="md:flex md:items-center">
	<Gallery {images} />
	<MainInfo />
</section>

<PurchaseForm />

<PosttypeContent />

<div class="mt-8 xl:mt-12">
	<BestSellerProducts />
</div>
