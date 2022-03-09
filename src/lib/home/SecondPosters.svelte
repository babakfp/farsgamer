<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Autoplay, EffectFade } from 'swiper'

	const postersPack = [
		[
			{ imgSrc: '/img/home/home-second-poster (1).png' },
			{ imgSrc: '/img/home/home-second-poster (2).png' },
		],
		[
			{ imgSrc: '/img/home/home-second-poster (3).png' },
			{ imgSrc: '/img/home/home-second-poster (4).png' },
		],
	]
</script>

<Swiper
	class="home-second-posters mt-4 md:w-4/12 md:mt-0"
	modules={[ Autoplay, EffectFade ]}
	loop={true}
	speed={600}
	autoplay={{ delay: 4000, disableOnInteraction: false }}
	spaceBetween={16}
	effect="fade"
>
	{#each postersPack as posters}
		<SwiperSlide>
			<div class="grid grid-cols-2 gap-4 md:grid-cols-1">
				{#each posters as poster}
					<a class="flex" href={poster.href || 'javascript:'}>
						<img class="w-full rounded" src={poster.imgSrc} alt>
					</a>
				{/each}
			</div>
		</SwiperSlide>
	{/each}
</Swiper>
