<script>
  import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay } from 'swiper'
	import PostCard from '$components/PostCard.svelte'
	
  export let posts = []
</script>

<Swiper
  class="box-carousel PostCardSwiper swiper-prevent-content-shift"
  modules={[ Pagination, Autoplay ]}
  speed={600}
  grabCursor={true}
  pagination={{ clickable: true }}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  spaceBetween={16}
  slidesPerView={2}
  breakpoints={{
    640:  { slidesPerView: 3, slidesPerGroup: 2 },
    860: 	{ slidesPerView: 4, slidesPerGroup: 3 },
    1024: { slidesPerView: 3, slidesPerGroup: 2 },
    1140: { slidesPerView: 4, slidesPerGroup: 3 },
    1280: { slidesPerView: 5, slidesPerGroup: 4 },
  }}
  touchEventsTarget="container"
>
  {#each posts as post}
    <SwiperSlide>
      <PostCard id={post.id} title={post.title} featuredImage={post.featuredImage} lazyLoading={true} />
    </SwiperSlide>
  {/each}
</Swiper>

<style lang="postcss">
  :global(.PostCardSwiper.swiper-prevent-content-shift) {
    --swiper-slidesPerView: 2;

    @screen sm  { --swiper-slidesPerView: 3 }
    @screen 2md { --swiper-slidesPerView: 4 }
    @screen lg  { --swiper-slidesPerView: 3 }
    @screen 2lg { --swiper-slidesPerView: 4 }
    @screen xl  { --swiper-slidesPerView: 5 }
  }
</style>
