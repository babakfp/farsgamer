<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay } from 'swiper'
	import ProductCard from '$components/ProductCard.svelte'

	export let products
  export let lazyLoading = false
	export let specialDiscount = false
	let isSwiperGettingTouched = false
</script>

<Swiper class="swiper--card {isSwiperGettingTouched && 'swiper--moving'} ProductCardSwiper swiper-prevent-content-shift"
	modules={[ Pagination, Autoplay ]}
	speed={600}
	grabCursor={true}
	pagination={{}}
	spaceBetween={16}
	slidesPerView={1}
	breakpoints={{
		360:  { slidesPerView: 2 },
		576:  { slidesPerView: 3, slidesPerGroup: 2 },
		860: 	{ slidesPerView: 4, slidesPerGroup: 3 },
		1280: { slidesPerView: 5, slidesPerGroup: 4 },
	}}
  touchEventsTarget="container"
	on:touchMove={_=> isSwiperGettingTouched = true}
	on:transitionEnd={_=> isSwiperGettingTouched = false}
>

	{#each products as product}
    <SwiperSlide>
      <ProductCard
				id={product.id}
				thumb={product.thumb}
				title={product.title}
				price={product.price}
				{specialDiscount} {lazyLoading}
			/>
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
