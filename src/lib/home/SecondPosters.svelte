<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay } from 'swiper'

	const postersPack = [
		[
			{ imgSrc: '/images/home/home-second-poster (1).png' },
			{ imgSrc: '/images/home/home-second-poster (2).png' },
		],
		[
			{ imgSrc: '/images/home/home-second-poster (3).png' },
			{ imgSrc: '/images/home/home-second-poster (4).png' },
		],
	]
</script>

<Swiper
	class="home-second-posters mt-4 md:w-4/12 md:mt-0"
	modules={[ Pagination, Autoplay ]}
	loop={true}
	speed={600}
	grabCursor={true}
	pagination={{ clickable: true }}
	autoplay={{ delay: 4000, disableOnInteraction: false }}
	spaceBetween={16}
>
	{#each postersPack as posters}
		<SwiperSlide>
			<div class="grid grid-cols-2 gap-4 md:grid-cols-1">
				{#each posters as poster}
					<a class="flex" href={poster.link || 'javascript:'}>
						<img class="w-full rounded" src={poster.imgSrc} alt />
					</a>
				{/each}
			</div>
		</SwiperSlide>
	{/each}
</Swiper>

<style lang="postcss">
	:global(.home-second-posters .swiper-pagination) {
		bottom: unset;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(90deg);
		z-index: 0;
	}
	:global(.home-second-posters .swiper-wrapper) {
		z-index: 1;
	}
</style>
