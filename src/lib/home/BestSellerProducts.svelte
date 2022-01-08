<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay } from 'swiper'

	import ContentSection from '$lib/ContentSection.svelte'
	import ProductCard from '$lib/ProductCard.svelte'
</script>

<ContentSection title="پرفروشـترین های هـفته" href="javascript:">
	<Swiper
		class="product-carousel"
		modules={[ Pagination, Autoplay ]}
		speed={600}
		grabCursor={true}
		pagination={{ clickable: true }}
		autoplay={{ delay: 4000, disableOnInteraction: false }}
		spaceBetween={16}
		slidesPerView={2}
		breakpoints={{
			640:  { slidesPerView: 3 },
			840: 	{ slidesPerView: 4 },
			1024: { slidesPerView: 3 },
			1140: { slidesPerView: 4 },
			1280: { slidesPerView: 5 },
			1800: { slidesPerView: 6 },
		}}
	>
		<SwiperSlide><ProductCard /></SwiperSlide>
		<SwiperSlide><ProductCard /></SwiperSlide>
		<SwiperSlide><ProductCard /></SwiperSlide>
		<SwiperSlide><ProductCard /></SwiperSlide>
		<SwiperSlide><ProductCard /></SwiperSlide>
		<SwiperSlide><ProductCard /></SwiperSlide>
		<SwiperSlide><ProductCard /></SwiperSlide>
	</Swiper>
</ContentSection>
