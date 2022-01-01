<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay } from 'swiper'

	const posters = [
		{ imgSrc: '/images/home/home-main-poster (1).png' },
		{ imgSrc: '/images/home/home-main-poster (2).png' },
		{ imgSrc: '/images/home/home-main-poster (3).png' },
		{ imgSrc: '/images/home/home-main-poster (4).png' },
	]
</script>

<Swiper
	modules={[ Pagination, Autoplay ]}
	loop={true}
	speed={600}
	grabCursor={true}
	pagination={{ clickable: true, dynamicBullets: true }}
	autoplay={{ delay: 4000, disableOnInteraction: false }}
>
	{#each posters as poster}
		<SwiperSlide>
			<a href={poster.href || 'javascript:'}>
				<img src={poster.imgSrc} alt />
			</a>
		</SwiperSlide>
	{/each}
</Swiper>
