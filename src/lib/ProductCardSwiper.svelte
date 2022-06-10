<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay } from 'swiper'
	import ProductCard from '$lib/ProductCard.svelte'

  export let lazyLoading
	export let specialDiscount
	// export let products = []
</script>

<Swiper class="box-carousel ProductCardSwiper swiper-prevent-content-shift"
	modules={[ Pagination, Autoplay ]}
	speed={600}
	grabCursor={true}
	pagination={{ clickable: true }}
	spaceBetween={16}
	slidesPerView={1}
	breakpoints={{
		360:  { slidesPerView: 2 },
		576:  { slidesPerView: 3 },
		860: 	{ slidesPerView: 4 },
		1280: { slidesPerView: 5 },
	}}
	>

	{#each [...Array(7).keys()] as _}
    <SwiperSlide>
      <ProductCard {specialDiscount} {lazyLoading} />
    </SwiperSlide>
	{/each}

</Swiper>

<style lang="postcss">
  :global(.ProductCardSwiper.swiper-prevent-content-shift) {
    @screen 5xs { --swiper-slidesPerView: 2 }
    @screen xs  { --swiper-slidesPerView: 3 }
    @screen 2md { --swiper-slidesPerView: 4 }
    @screen xl  { --swiper-slidesPerView: 5 }
  }
</style>
