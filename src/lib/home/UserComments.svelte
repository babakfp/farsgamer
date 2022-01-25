<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay } from 'swiper'
	import ContentSection from '$lib/ContentSection.svelte'
	import Comment from './Comment.svelte'
</script>

<ContentSection title="نظــراتـــ اخیر کــاربــران">
	<Swiper
		class="box-carousel"
		modules={[ Pagination, Autoplay ]}
		speed={600}
		grabCursor={true}
		pagination={{ clickable: true }}
		autoplay={{ delay: 4000, disableOnInteraction: false }}
		spaceBetween={16}
		breakpoints={{
			640:  { slidesPerView: 2 },
			840: 	{ slidesPerView: 3 },
			1024: { slidesPerView: 2 },
			1140: { slidesPerView: 3 },
			1400: { slidesPerView: 4 },
			1600: { slidesPerView: 5 },
		}}
	>
		{#each [1,2,3,4,5,6] as comment}
			<SwiperSlide>
				<Comment />
			</SwiperSlide>
		{/each}
	</Swiper>
</ContentSection>
