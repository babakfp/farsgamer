<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay, Thumbs } from 'swiper'

	export let images = []

	let thumbsSwiper
	const setThumbsSwiper = e => {
		const [swiper] = e.detail
		setTimeout(_=> thumbsSwiper = swiper)
	}
</script>



{#if images.length > 0}
	<div class="mx-auto md:order-2 md:p-6 2xl:p-8 3xl:w-full">
		<div class="flex gap-4 md:-ml-6 2xl:-ml-8">
			
			<!-- Main Gallery -->
			<Swiper
				class="w-56 h-56 mr-auto ml-0 4xs:w-62 4xs:h-62 2xl:w-72 2xl:h-72"
				modules={[ Pagination, Autoplay, Thumbs ]}
				thumbs={{ swiper: thumbsSwiper }}
				speed={600}
				grabCursor={true}
				pagination={{ clickable: true, dynamicBullets: true }}
				autoplay={{ delay: 4000, disableOnInteraction: true }}
			>
				{#each images as src}
					<SwiperSlide class="main-gallery-slide">
						<img {src} alt />
					</SwiperSlide>
				{/each}
			</Swiper>
			<!--/ Main Gallery -->

			<!-- Thumbs Gallery -->
			{#if images.length > 1}
				<Swiper
					class="w-16 min-w-16 h-56 ml-auto mr-0 4xs:w-18 4xs:min-w-18 4xs:h-62 2xl:w-22 2xl:min-w-22 2xl:h-72"
					modules={[ Pagination, Autoplay, Thumbs ]}
					watchSlidesProgress
					on:swiper={setThumbsSwiper}
					speed={600}
					grabCursor={true}
					autoplay={{ delay: 4000, disableOnInteraction: true }}
					direction="vertical"
					spaceBetween={16}
					slidesPerView={3}
				>
					{#each images as src}
						<SwiperSlide>
							<img class="rounded" {src} alt />
						</SwiperSlide>
					{/each}
				</Swiper>
			{/if}
			<!--/ Thumbs Gallery -->

		</div>
	</div>
{/if}

<style lang="postcss">
	:global(.main-gallery-slide:first-child) img { @apply rounded-r }
	:global(.main-gallery-slide:last-child) img { @apply rounded-l }
</style>
