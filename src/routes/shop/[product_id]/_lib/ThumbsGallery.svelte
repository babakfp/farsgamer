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

{#if posters.length > 1}
	<Swiper
		class="w-16 min-w-16 h-56 ml-auto mr-0 4xs:w-18 4xs:min-w-18 4xs:h-62 2xl:w-22 2xl:min-w-22 2xl:h-72"
		modules={[ Pagination, Autoplay, Thumbs ]}
		watchSlidesProgress
		on:swiper={setThumbsSwiper}
		speed={600}
		grabCursor={true}
		autoplay={{ delay: 4000, disableOnInteraction: true }}
		direction="vertical"
		spaceBetween={16}
		slidesPerView={3}
	>
		{#each posters as poster}
			<SwiperSlide>
				<a href={poster.href || 'javascript:'}>
					<img class="rounded" src={poster.imgSrc} alt>
				</a>
			</SwiperSlide>
		{/each}
	</Swiper>
{/if}
