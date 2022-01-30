<script>
	import Poster from './lib/Poster.svelte'
	import GalleryMainThumbs from './lib/GalleryMainThumbs.svelte'
	import GallerySideThumbs from './lib/GallerySideThumbs.svelte'
	import MainInfo from './lib/MainInfo.svelte'
	import PurchaseForm from './lib/PurchaseForm.svelte'
	import PosttypeContent from './lib/PosttypeContent.svelte'
	import BestSellerProducts from '$lib/home/BestSellerProducts.svelte'

	let thumbsSwiper
</script>

<svelte:head>
	<title>عنوان محصول</title>
</svelte:head>

<Poster />

<section class="md:flex md:items-center">
	<div class="mx-auto md:order-2 md:p-6 2xl:p-8 3xl:w-full">
		<div class="flex gap-4 md:-ml-6 2xl:-ml-8">
			<GalleryMainThumbs bind:thumbsSwiper={thumbsSwiper} />
			<GallerySideThumbs bind:thumbsSwiper={thumbsSwiper} />
		</div>
	</div>

	<MainInfo />
</section>

<PurchaseForm />

<PosttypeContent />

<div class="mt-8 xl:mt-12">
	<BestSellerProducts />
</div>
