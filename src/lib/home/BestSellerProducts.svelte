<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay } from 'swiper'

	import ProductCard from '$lib/ProductCard.svelte'
</script>

<section>
  <div class="flex items-center justify-between mb-4 mt-8 lg:mt-10">
    <div class="flex gap-2 items-center">
      <img class="w-6 h-6" src="/svg/fire.svg" alt="آتش">
      <h2 class="font-bold text-lg">پرفروشـترین محصولاتــــــ</h2>
    </div>
    <a class="btn btn--sm btn--outline btn--brand" href="javascript:">
      <span>مشاهده همه</span>
      <i class="icon-angle-left"></i>
    </a>
  </div>

	<Swiper
		modules={[ Pagination, Autoplay ]}
		speed={600}
		grabCursor={true}
		pagination={{ clickable: true }}
		autoplay={{ delay: 4000, disableOnInteraction: false }}
		slidesPerView={2}
		breakpoints={{
			768: { slidesPerView: 3 },
			1280: { slidesPerView: 5 },
			1536: { slidesPerView: 6 },
		}}
		spaceBetween={16}
	>
		<SwiperSlide><ProductCard /></SwiperSlide>
		<SwiperSlide><ProductCard /></SwiperSlide>
		<SwiperSlide><ProductCard /></SwiperSlide>
		<SwiperSlide><ProductCard /></SwiperSlide>
		<SwiperSlide><ProductCard /></SwiperSlide>
		<SwiperSlide><ProductCard /></SwiperSlide>
		<SwiperSlide><ProductCard /></SwiperSlide>
	</Swiper>
</section>

<style>
	section :global(.swiper) {
		padding-bottom: calc(16px + 12px);
		overflow: unset;
	}

	section :global(.swiper-pagination-bullets.swiper-pagination-horizontal),
	section :global(.swiper-pagination-bullets-dynamic.swiper-pagination-horizontal) {
		bottom: 0;

		/* for normal bullets */
		text-align: left;

		/* for dynamic bullets */
		left: 0 !important;
    transform: unset !important;
    right: unset !important;
	}
</style>
