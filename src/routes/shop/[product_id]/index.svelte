<script>
	import Poster from './lib/Poster.svelte'
	import GalleryMainThumbs from './lib/GalleryMainThumbs.svelte'
	import GallerySideThumbs from './lib/GallerySideThumbs.svelte'
	import MainInfo from './lib/MainInfo.svelte'
	import PurchaseForm from './lib/PurchaseForm.svelte'
	import PosttypeContent from './lib/PosttypeContent.svelte'
	import BestSellerProducts from '$lib/home/BestSellerProducts.svelte'
</script>

<svelte:head>
	<title>عنوان محصول</title>
</svelte:head>

<Poster />

<section class="lg:flex lg:items-center">
	<div class="mx-auto lg:order-2 lg:p-8 2xl:p-12 3xl:w-full">
		<div class="flex gap-4 lg:-ml-4 xl:-ml-8">
			<GalleryMainThumbs />
			<GallerySideThumbs />
		</div>
	</div>

	<MainInfo />
</section>

<!-- <PurchaseForm /> -->

<PosttypeContent />

<div class="mt-8 xl:mt-12">
	<BestSellerProducts />
</div>

<style lang="postcss">
	/* :global(.page-content) {
		@apply !pt-0 !px-0;
	} */
</style>
