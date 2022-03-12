<script>
	import Gallery from './_lib/Gallery.svelte'
	import Info from './_lib/Info.svelte'
	import PurchaseForm from './_lib/PurchaseForm.svelte'
	import PosttypeContent from './_lib/PosttypeContent.svelte'
	import BestSellerProducts from '$lib/home/BestSellerProducts.svelte'
	export let product
</script>

<svelte:head>
	<title>عنوان محصول</title>
</svelte:head>

<section class="md:flex md:items-center">
	<Gallery images={product.images} />
	<Info title={product.title} rating={product.rating} ratingCount={product.ratingCount} coins={product.coins} />
</section>

<PurchaseForm />

<PosttypeContent />

<div class="mt-8 xl:mt-12">
	<BestSellerProducts />
</div>
