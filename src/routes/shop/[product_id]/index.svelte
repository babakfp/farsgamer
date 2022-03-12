<script>
	import products from '$db/products.js'
	import Gallery from './_lib/Gallery.svelte'
	import Info from './_lib/Info.svelte'
	import PurchaseForm from './_lib/PurchaseForm.svelte'
	import PosttypeContent from './_lib/PosttypeContent.svelte'
	import BestSellerProducts from '$lib/home/BestSellerProducts.svelte'
</script>

<svelte:head>
	<title>عنوان محصول</title>
</svelte:head>

<section class="md:flex md:items-center">
	<Gallery images={products[0].images} />
	<Info title={products[0].title} rating={products[0].rating} ratingCount={products[0].ratingCount} coins={products[0].coins} />
</section>

<PurchaseForm />

<PosttypeContent />

<div class="mt-8 xl:mt-12">
	<BestSellerProducts />
</div>
