<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay, Thumbs } from 'swiper'

	export let images = []
	export let thumbsSwiper

	const setThumbsSwiper = e => {
		const [swiper] = e.detail
		setTimeout(_=> thumbsSwiper = swiper)
	}
</script>

{#if images.length > 1}
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
		{#each images as src}
			<SwiperSlide>
				<img class="rounded" {src} alt />
			</SwiperSlide>
		{/each}
	</Swiper>
{/if}
