<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay, Thumbs } from 'swiper'

	export let images = []
	export let thumbsSwiper
</script>

<Swiper
	class="w-56 h-56 mr-auto ml-0 4xs:w-62 4xs:h-62 2xl:w-72 2xl:h-72"
	modules={[ Pagination, Autoplay, Thumbs ]}
	thumbs={{ swiper: thumbsSwiper }}
	speed={600}
	grabCursor={true}
	pagination={{ clickable: true, dynamicBullets: true }}
	autoplay={{ delay: 4000, disableOnInteraction: true }}
>
	{#each images as src}
		<SwiperSlide class="main-gallery-slide">
			<img {src} alt />
		</SwiperSlide>
	{/each}
</Swiper>

<style lang="postcss">
	:global(.main-gallery-slide:first-child) img { @apply rounded-r }
	:global(.main-gallery-slide:last-child) img { @apply rounded-l }
</style>
