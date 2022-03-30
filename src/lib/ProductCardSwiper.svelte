<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay } from 'swiper'

	import ProductCard from '$lib/ProductCard.svelte'

	export let specialDiscount = false
</script>

<Swiper
	class="box-carousel product-card-swiper"
	modules={[ Pagination, Autoplay ]}
	speed={600}
	grabCursor={true}
	pagination={{ clickable: true }}
	autoplay={{ delay: 5000, disableOnInteraction: false }}
	spaceBetween={16}
	slidesPerView={1}
	breakpoints={{
		360:  { slidesPerView: 2 },
		576:  { slidesPerView: 3 },
		860: 	{ slidesPerView: 4 },
		1280: { slidesPerView: 5 },
	}}
	>
	<SwiperSlide><ProductCard {specialDiscount} /></SwiperSlide>
	<SwiperSlide><ProductCard {specialDiscount} /></SwiperSlide>
	<SwiperSlide><ProductCard {specialDiscount} /></SwiperSlide>
	<SwiperSlide><ProductCard {specialDiscount} /></SwiperSlide>
	<SwiperSlide><ProductCard {specialDiscount} /></SwiperSlide>
	<SwiperSlide><ProductCard {specialDiscount} /></SwiperSlide>
	<SwiperSlide><ProductCard {specialDiscount} /></SwiperSlide>
</Swiper>

<style lang="postcss">
	:root {
		--slidesPerView: 1;
		--sidebar-w: 0px;
	}

	:global(.product-card-swiper .swiper-slide) {
		/* (full view width) | (page padding from right and left) | (sidebar width) */
		--slides-wrapper-width: 100vw - var(--page) - var(--page) - var(--sidebar-w);
		--space-between-sliders: ( var(--slidesPerView) - 1 ) * 1rem;
		width: calc( ( var(--slides-wrapper-width) - var(--space-between-sliders) ) / var(--slidesPerView) );
	}

	@screen 5xs {
		:root {
			--slidesPerView: 2;
		}
	}
	@screen xs {
		:root {
			--slidesPerView: 3;
		}
	}
	@screen 2md {
		:root {
			--slidesPerView: 4;
		}
	}
	@screen xl {
		:root {
			--slidesPerView: 5;
			--sidebar-w: 16rem;
		}
	}
</style>
