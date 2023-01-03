<script>
	import { Swiper, SwiperSlide } from "swiper/svelte"
	import { Pagination, Autoplay } from "swiper"
	import PostCard from "$components/PostCard.svelte"

	export let posts = []
	export let lazyLoading = false
	let isSwiperGettingTouched = false
</script>

<Swiper
	class="
		swiper--card
		{isSwiperGettingTouched && 'swiper--moving'}
		PostCardSwiper swiper-prevent-content-shift
	"
	modules={[Pagination, Autoplay]}
	speed={600}
	grabCursor={true}
	pagination={{}}
	autoplay={{ delay: 5000, disableOnInteraction: false }}
	spaceBetween={16}
	slidesPerView={2}
	breakpoints={{
		640: { slidesPerView: 3, slidesPerGroup: 2 },
		1280: { slidesPerView: 4, slidesPerGroup: 3 },
	}}
	touchEventsTarget="container"
	on:touchMove={() => (isSwiperGettingTouched = true)}
	on:transitionEnd={() => (isSwiperGettingTouched = false)}
>
	{#each posts as post}
		<SwiperSlide>
			<PostCard id={post.id} title={post.title} featuredImage={post.featuredImage} {lazyLoading} />
		</SwiperSlide>
	{/each}
</Swiper>

<style lang="postcss">
	:global(.PostCardSwiper.swiper-prevent-content-shift) {
		--swiper-slidesPerView: 2;
		@screen sm {
			--swiper-slidesPerView: 3;
		}
		@screen xl {
			--swiper-slidesPerView: 4;
		}
	}
</style>
