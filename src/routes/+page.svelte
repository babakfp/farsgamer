<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay } from 'swiper'
	import CardsSection from '$components/CardsSection.svelte'
	import ImgShadowSelf from '$components/ImgShadowSelf.svelte'
	import ProductCardSwiper from '$components/ProductCardSwiper.svelte'
	import PostCardSwiper from '$components/PostCardSwiper.svelte'
	import { posts } from '$database/posts.js'
	import { products } from '$database/products.js'
	import StarRating from '$components/StarRating.svelte'
	import { giftCards, bigPosterImages, smallPosterImages } from '$store/home.js'

	const bestSellingProducts = products.filter(product => product.price.afterDiscount === undefined)
	const discountedProducts = products.filter(product => product.price.afterDiscount !== undefined)
</script>

<svelte:head>
	<title>فارس گیمر - اولین مرجع رسمی فروش بازی های آنلاین</title>
</svelte:head>

<!-- svelte-ignore a11y-invalid-attribute -->
<div class="space-y-8 lg:space-y-12">


  <!-- Main Posters -->
	{#if $bigPosterImages.length > 0 && $smallPosterImages.length > 0}
		<section class="md:flex md:gap-4">
			<div class="md:w-8/12 md:min-w-8/12 md:max-w-8/12">

				<!-- Right posters -->
				<Swiper
					class="swiper--gallery top-big-posters"
					modules={[ Pagination, Autoplay ]}
					effect="fade"
					loop={true}
					speed={600}
					grabCursor={true}
					pagination={{ clickable: true }}
					autoplay={{ delay: 5000, disableOnInteraction: false }}
					touchEventsTarget="container"
				>
					{#each $bigPosterImages as poster}
						<SwiperSlide>
							<a class="link-img flex" href={poster.href}>
								<img class="aspect-[16/9]" src={poster.src} alt>
							</a>
						</SwiperSlide>
					{/each}
				</Swiper>
			</div>

			<!-- Left posters -->
			<div class="grid grid-cols-2 gap-4 mt-4 md:grid-cols-1 md:w-4/12 md:mt-0">
				{#each $smallPosterImages as poster}
					<a class="link-img flex" href={poster.href}>
						<img class="w-full rounded aspect-[16/9]" src={poster.src} alt>
					</a>
				{/each}
			</div>
		</section>
	{/if}


	<!-- Best sale -->
	<CardsSection title="پرفروشـترین هـفته" href="javascript:">
		<ProductCardSwiper products={bestSellingProducts} />
	</CardsSection>


	{#if $giftCards.length > 0}
		<CardsSection title="گـیفتــکارد ها">
			<Swiper
				class="swiper--card GiftCardSwiper swiper-prevent-content-shift"
				modules={[ Pagination, Autoplay ]}
				speed={600}
				grabCursor={true}
				pagination={{ clickable: true }}
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				spaceBetween={16}
				slidesPerView={2}
				breakpoints={{
					360:  { slidesPerView: 3, slidesPerGroup: 2 },
					640:  { slidesPerView: 4, slidesPerGroup: 3 },
					860: 	{ slidesPerView: 5, slidesPerGroup: 4 },
					1024: { slidesPerView: 4, slidesPerGroup: 3 },
					1140: { slidesPerView: 5, slidesPerGroup: 4 },
					1280: { slidesPerView: 6, slidesPerGroup: 5 },
				}}
				touchEventsTarget="container"
			>
				{#each $giftCards as giftCard}
					<SwiperSlide>
						<a class="link-img" href={giftCard.href}>
							<img class="rounded" src={giftCard.src} alt />
						</a>
					</SwiperSlide>
				{/each}
			</Swiper>
		</CardsSection>
	{/if}


  <!-- User reviews -->
	<CardsSection title="نظــرات اخیـر کـاربران">
		<Swiper
			class="swiper--card ReviewCardSwiper swiper-prevent-content-shift"
			modules={[ Pagination, Autoplay ]}
			speed={600}
			grabCursor={true}
			loop={true}
			pagination={{ clickable: true }}
			autoplay={{ delay: 5000, disableOnInteraction: false }}
			spaceBetween={16}
      slidesPerGroup={1}
			breakpoints={{
				640:  { slidesPerView: 2, slidesPerGroup: 2 },
				860: 	{ slidesPerView: 3, slidesPerGroup: 3 },
				1024: { slidesPerView: 2, slidesPerGroup: 2 },
				1140: { slidesPerView: 3, slidesPerGroup: 3 },
				1536: { slidesPerView: 4, slidesPerGroup: 4 },
			}}
      touchEventsTarget="container"
    >
			{#each [1,2,3,4,5,6] as comment}
				<SwiperSlide>
	
					<div class="relative p-4 pb-3 bg-white rounded text-sm">
						<div class="absolute left-2 -top-2 opacity-40">
							<i class="icon-quote text-3xl opacity-50 after:absolute after:inset-0 after:h-full after:bg-gradient-to-b after:from-transparent after:to-white"></i>
						</div>
					
						<p class="line-clamp-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.<p>
						<span class="block mt-2 text-xs text-gray-500 line-clamp-1">محصولات پابجی موبایل | pubg mobile</span>
						
						<hr class="border-gray-100 -mx-4 mt-3 pt-3 ">
						<div class="flex items-center justify-between">
							<span>علیرضا خانی</span>
							<StarRating />
						</div>
					</div>
	
				</SwiperSlide>
			{/each}
		</Swiper>
	</CardsSection>


  <!-- 2 posters -->
	<section class="grid gap-4 sm:grid-cols-2">
    <a class="block link-img" href="javascript:">
			<img class="w-full rounded aspect-[601/251]" src="/img/home/poster-half-width (1).png" alt loading="lazy">
		</a>
    <a class="block link-img" href="javascript:">
			<img class="w-full rounded aspect-[601/251]" src="/img/home/poster-half-width (2).png" alt loading="lazy">
		</a>
	</section>


	<!-- Discounted -->
	<CardsSection title="تـخـفیف ویــژه" href="javascript:">
		<ProductCardSwiper products={discountedProducts} specialDiscount={true} lazyLoading={true} />
	</CardsSection>


  <!-- Single poster -->
	<a class="flex hover:opacity-90" href="javascript:">
		<img class="rounded aspect-[200/41]" src="/img/home/poster-full-width (1).png" alt loading="lazy">
	</a>


	<!-- Telegram and Instagram -->
	<div class="flex justify-center gap-4">
		<ImgShadowSelf class="max-w-64" classImg="aspect-[2/1] bg-gray-100" src="/img/home/social-media-telegram.png" alt="فارس گیمر در تلگرام" />
		<ImgShadowSelf class="max-w-64" classImg="aspect-[2/1] bg-gray-100" src="/img/home/social-media-instagram.png" alt="فارس گیمر در اینستاگرام" />
	</div>


  <!-- New blog posts -->
	<CardsSection title="جدیدترین پست‌ها" href="javascript:">
    <PostCardSwiper {posts} />
	</CardsSection>


  <!-- 4 posters -->
	<section class="grid grid-cols-2 gap-4 sm:grid-cols-4">
		<ImgShadowSelf classImg="aspect-[142/125] bg-gray-100" src="/img/home/poster-1-4-width (1).png" />
		<ImgShadowSelf classImg="aspect-[142/125] bg-gray-100" src="/img/home/poster-1-4-width (2).png" />
		<ImgShadowSelf classImg="aspect-[142/125] bg-gray-100" src="/img/home/poster-1-4-width (3).png" />
		<ImgShadowSelf classImg="aspect-[142/125] bg-gray-100" src="/img/home/poster-1-4-width (4).png" />
	</section>


  <!-- Single poster -->
	<a class="link-img flex" href="javascript:">
		<img class="rounded aspect-[200/41]" src="/img/home/poster-full-width (2).png" alt loading="lazy">
	</a>


</div>

<style lang="postcss">
	:global(.top-big-posters .swiper-pagination) {
		@apply lg:opacity-0;
	}
	@screen lg {
		:global(.top-big-posters:hover .swiper-pagination) {
			@apply opacity-100;
		}
	}

  /*
  ---
  Fix Swiper content shift
  ---
  */

  :global(.GiftCardSwiper.swiper-prevent-content-shift) {
    --swiper-slidesPerView: 2;

    @screen 5xs { --swiper-slidesPerView: 3 }
    @screen sm  { --swiper-slidesPerView: 4 }
    @screen 2md { --swiper-slidesPerView: 5 }
    @screen lg  { --swiper-slidesPerView: 4 }
    @screen 2lg { --swiper-slidesPerView: 5 }
    @screen xl  { --swiper-slidesPerView: 6 }
  }

  :global(.ReviewCardSwiper.swiper-prevent-content-shift) {
    @screen sm  { --swiper-slidesPerView: 2 }
    @screen 2md { --swiper-slidesPerView: 3 }
    @screen lg  { --swiper-slidesPerView: 2 }
    @screen 2lg { --swiper-slidesPerView: 3 }
    @screen 2xl { --swiper-slidesPerView: 4 }
  }
</style>
