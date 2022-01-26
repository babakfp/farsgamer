<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay, Thumbs } from 'swiper'

	export let thumbsSwiper

	const posters = [
		{ imgSrc: '/img/products/product-thumb (1).png' },
		{ imgSrc: '/img/products/product-thumb (2).png' },
		{ imgSrc: '/img/products/product-thumb (3).png' },
		{ imgSrc: '/img/products/product-thumb (4).png' },
		{ imgSrc: '/img/products/product-thumb (5).png' },
	]
</script>

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
	{#each posters as poster}
		<SwiperSlide>
			<a href={poster.href || 'javascript:'}>
				<img class="rounded" src={poster.imgSrc} alt />
			</a>
		</SwiperSlide>
	{/each}
</Swiper>
