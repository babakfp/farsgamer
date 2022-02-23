<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay } from 'swiper'
	import ContentSection from '$lib/ContentSection.svelte'
	import ImgShadowSelf from '$lib/ImgShadowSelf.svelte'

	const images = [
		{ src: '/img/gift-card/play-station.png' },
		{ src: '/img/gift-card/apple.png' },
		{ src: '/img/gift-card/steam.png' },
		{ src: '/img/gift-card/amazon.png' },
		{ src: '/img/gift-card/xbox.png' },
		{ src: '/img/gift-card/google-play.png' },
	]
</script>

<ContentSection title="گـیفتــکارد ها">
	<Swiper
		class="box-carousel"
		modules={[ Pagination, Autoplay ]}
		speed={600}
		grabCursor={true}
		pagination={{ clickable: true }}
		autoplay={{ delay: 4000, disableOnInteraction: false }}
		spaceBetween={16}
		slidesPerView={3}
		breakpoints={{
			640:  { slidesPerView: 4 },
			840: 	{ slidesPerView: 5 },
			1024: { slidesPerView: 4 },
			1140: { slidesPerView: 5 },
			1280: { slidesPerView: 6 },
			1800: { slidesPerView: 7 },
		}}
	>
		{#each images as img}
			<SwiperSlide>
				<ImgShadowSelf src={img.src} />
			</SwiperSlide>
		{/each}
	</Swiper>
</ContentSection>
