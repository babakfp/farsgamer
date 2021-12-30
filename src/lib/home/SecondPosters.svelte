<script>
	// import { Swiper, SwiperSlide } from 'swiper/svelte'
	// import { Pagination, Autoplay } from 'swiper'

	const posters = [
		{ imgSrc: '/images/home/home-second-poster (1).png' },
		{ imgSrc: '/images/home/home-second-poster (2).png' },
		{ imgSrc: '/images/home/home-second-poster (3).png' },
		{ imgSrc: '/images/home/home-second-poster (4).png' },
	]
</script>

<div class="grid gap-4 snap-y snap-mandatory" style="max-height: 404px; overflow-y: auto;">
	{#each posters as poster}
		<a class="snap-start" href={poster.link || 'javascript:'}>
			<img class="rounded" src={poster.imgSrc} alt />
		</a>
	{/each}
</div>

<style lang="postcss">
	.grid::-webkit-scrollbar {
		@apply w-0;
	}
</style>

<!-- TODO: Replace this with Scroll Snap -->
<!-- <Swiper
	modules={[ Pagination, Autoplay ]}
	loop={true}
	speed={600}
	grabCursor={true}
	pagination={{ clickable: true, dynamicBullets: true }}
	autoplay={{ delay: 4000, disableOnInteraction: false }}
	direction={'vertical'}
	spaceBetween={16}
>
	{#each posters as poster}
		<SwiperSlide>
			<a href={poster.link || 'javascript:'}>
				<img src={poster.imgSrc} alt />
			</a>
		</SwiperSlide>
	{/each}
</Swiper> -->
