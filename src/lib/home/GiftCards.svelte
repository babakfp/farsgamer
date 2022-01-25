<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay } from 'swiper'
	import ContentSection from '$lib/ContentSection.svelte'

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
				<a class="group relative block duration-200 ease-in-out hover:scale-105" href={img.href || 'javascript:'}>
					<img class="absolute bottom-0 px-8 blur-md rounded duration-200 ease-in-out opacity-0 group-hover:opacity-80 group-hover:-bottom-2" src={img.src} alt />
					<img class="relative rounded" src={img.src} alt />
				</a>
			</SwiperSlide>
		{/each}
	</Swiper>
</ContentSection>
