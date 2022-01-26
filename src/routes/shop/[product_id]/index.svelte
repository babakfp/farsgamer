<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay, Thumbs } from 'swiper'

	import Poster from './lib/Poster.svelte'
	import GalleryMainThumbs from './lib/GalleryMainThumbs.svelte'
	import GallerySideThumbs from './lib/GallerySideThumbs.svelte'
	import MainInfo from './lib/MainInfo.svelte'
	import PurchaseForm from './lib/PurchaseForm.svelte'
	import PosttypeContent from './lib/PosttypeContent.svelte'
	import BestSellerProducts from '$lib/home/BestSellerProducts.svelte'

	let thumbsSwiper

	const setThumbsSwiper = e => {
		const [swiper] = e.detail
		setTimeout(_=> {
			thumbsSwiper = swiper
		})
	}

	const mainThumbsPosters = [
		{ imgSrc: '/img/products/product-thumb (1).png' },
		{ imgSrc: '/img/products/product-thumb (2).png' },
		{ imgSrc: '/img/products/product-thumb (3).png' },
		{ imgSrc: '/img/products/product-thumb (4).png' },
		{ imgSrc: '/img/products/product-thumb (5).png' },
	]

	const sideThumbsPosters = [
		{ imgSrc: '/img/products/product-thumb (1).png' },
		{ imgSrc: '/img/products/product-thumb (2).png' },
		{ imgSrc: '/img/products/product-thumb (3).png' },
		{ imgSrc: '/img/products/product-thumb (4).png' },
		{ imgSrc: '/img/products/product-thumb (5).png' },
	]
</script>

<svelte:head>
	<title>عنوان محصول</title>
</svelte:head>

<Poster />

<section class="lg:flex lg:items-center">
	<div class="mx-auto lg:order-2 lg:p-8 2xl:p-12 3xl:w-full">
		<div class="flex gap-4 lg:-ml-4 xl:-ml-8">

			<Swiper
				class="w-62 h-62 mr-auto ml-0"
				modules={[ Pagination, Autoplay, Thumbs ]}
				thumbs={{ swiper: thumbsSwiper }}
				speed={600}
				grabCursor={true}
				pagination={{ clickable: true, dynamicBullets: true }}
				autoplay={{ delay: 4000, disableOnInteraction: false }}
				spaceBetween={16}
			>
				{#each mainThumbsPosters as poster}
					<SwiperSlide>
						<a href={poster.href || 'javascript:'}>
							<img class="rounded" src={poster.imgSrc} alt />
						</a>
					</SwiperSlide>
				{/each}
			</Swiper>
		
			<Swiper
				class="w-18 min-w-18 h-62 ml-auto mr-0"
				modules={[ Pagination, Autoplay, Thumbs ]}
				watchSlidesProgress
				on:swiper={setThumbsSwiper}
				speed={600}
				grabCursor={true}
				autoplay={{ delay: 4000, disableOnInteraction: false }}
				direction="vertical"
				spaceBetween={16}
				slidesPerView={3}
			>
				{#each sideThumbsPosters as poster}
					<SwiperSlide>
						<a href={poster.href || 'javascript:'}>
							<img class="rounded" src={poster.imgSrc} alt />
						</a>
					</SwiperSlide>
				{/each}
			</Swiper>

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
