<script>
	import MainGallery from './_lib/MainGallery.svelte'
	import ThumbsGallery from './_lib/ThumbsGallery.svelte'
	import MainInfo from './_lib/MainInfo.svelte'
	import PurchaseForm from './_lib/PurchaseForm.svelte'
	import PosttypeContent from './_lib/PosttypeContent.svelte'
	import BestSellerProducts from '$lib/home/BestSellerProducts.svelte'

	let thumbsSwiper
</script>

<svelte:head>
	<title>عنوان محصول</title>
</svelte:head>

<section class="md:flex md:items-center">
	<div class="mx-auto md:order-2 md:p-6 2xl:p-8 3xl:w-full">
		<div class="flex gap-4 md:-ml-6 2xl:-ml-8">
			<MainGallery bind:thumbsSwiper={thumbsSwiper} />
			<ThumbsGallery bind:thumbsSwiper={thumbsSwiper} />
		</div>
	</div>

	<MainInfo />
</section>

<PurchaseForm />

<PosttypeContent />

<div class="mt-8 xl:mt-12">
	<BestSellerProducts />
</div>
