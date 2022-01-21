<script>
	import Poster from './lib/Poster.svelte'
	import GalleryMainThumbs from './lib/GalleryMainThumbs.svelte'
	import GallerySideThumbs from './lib/GallerySideThumbs.svelte'
	
	// import ImageGallery from './lib/ImageGallery.svelte'
	// import Info from './lib/Info.svelte'
	// import PurchaseForm from './lib/PurchaseForm.svelte'
	// import PosttypeContent from './lib/PosttypeContent.svelte'
	// import BestSellerProducts from '$lib/home/BestSellerProducts.svelte'
</script>

<svelte:head>
	<title>عنوان محصول</title>
</svelte:head>

<Poster />

<section class="px-4 -mt-4">
	<div class="flex justify-center gap-2">
		<GalleryMainThumbs />
		<GallerySideThumbs />
	</div>
</section>

<!-- <div class="px-4 max-w-3xl mt-8 mx-auto sm:mt-4 md:mt-0 lg:-mt-16 lg:items-center xl:-mt-20 2xl:-mt-24 2xl:max-w-4xl">
	<div class="grid gap-8 lg:gap-0 xl:flex xl:gap-8">
		<div>
			<ImageGallery />
		</div>

		<Info />
	</div>

	<PurchaseForm />
</div> -->

<!-- <BestSellerProducts /> -->
<!-- <PosttypeContent /> -->

<style lang="postcss">
	:global(.page-content) {
		@apply !pt-0 !px-0;
	}
</style>
