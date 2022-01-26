<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay, Thumbs } from 'swiper'

	export let thumbsSwiper

	const setThumbsSwiper = e => {
		const [swiper] = e.detail
		setTimeout(_=> {
			thumbsSwiper = swiper
		})
	}

	const posters = [
		{ imgSrc: '/img/products/product-thumb (1).png' },
		{ imgSrc: '/img/products/product-thumb (2).png' },
		{ imgSrc: '/img/products/product-thumb (3).png' },
		{ imgSrc: '/img/products/product-thumb (4).png' },
		{ imgSrc: '/img/products/product-thumb (5).png' },
	]
</script>

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
	{#each posters as poster}
		<SwiperSlide>
			<a href={poster.href || 'javascript:'}>
				<img class="rounded" src={poster.imgSrc} alt />
			</a>
		</SwiperSlide>
	{/each}
</Swiper>
