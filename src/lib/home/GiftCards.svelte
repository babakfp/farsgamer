<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay } from 'swiper'
	import ContentSection from '$lib/ContentSection.svelte'

	const images = [
		{ src: '/images/gift-card/play-station.png' },
		{ src: '/images/gift-card/apple.png' },
		{ src: '/images/gift-card/steam.png' },
		{ src: '/images/gift-card/amazon.png' },
		{ src: '/images/gift-card/xbox.png' },
		{ src: '/images/gift-card/google-play.png' },
	]
</script>

<ContentSection title="گـیفتــکارتـــ ها">
	<Swiper
		class="product-carousel"
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
			1400: { slidesPerView: 6 },
			1600: { slidesPerView: 7 },
		}}
	>
		{#each images as img}
			<SwiperSlide>
				<a class="group relative block rounded" href={img.link || 'javascript:'}>
					<img class="absolute -bottom-0 px-8 blur-md duration-200 ease-in-out opacity-0 group-hover:opacity-80 group-hover:-bottom-2" src={img.src} alt />
					<img class="relative" src={img.src} alt />
				</a>
			</SwiperSlide>
		{/each}
	</Swiper>
</ContentSection>
