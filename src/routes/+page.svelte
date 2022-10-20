<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay } from 'swiper'
	import CardsSection from '$components/CardsSection.svelte'
	import ProductCardSwiper from '$components/ProductCardSwiper.svelte'
	import PostCardSwiper from '$components/PostCardSwiper.svelte'
	import { posts } from '$database/posts.js'
	import { products } from '$database/products.js'
	import StarRating from '$components/StarRating.svelte'
	import { giftCards, bigPosterImages, smallPosterImages } from '$store/home.js'

	const posters4 = [
		{ alt: 'پشتیبانی ۲۴ ساعته', src: '/img/home/poster-1-4-width (1).png' },
		{ alt: 'تجهیزات گیمینگ', src: '/img/home/poster-1-4-width (2).png' },
		{ alt: 'محصولات استیم', src: '/img/home/poster-1-4-width (3).png' },
		{ alt: 'محصولات ای‌پکس لجندز', src: '/img/home/poster-1-4-width (4).png' },
	]

	const bestSellingProducts = products.filter(product => product.price.afterDiscount === undefined)
	const discountedProducts = products.filter(product => product.price.afterDiscount !== undefined)

	let isGiftCardsSwiperGettingTouched = false
	let isReviewsSwiperGettingTouched = false
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
					pagination={{}}
					autoplay={{ delay: 5000, disableOnInteraction: false }}
					touchEventsTarget="container"
				>
					{#each $bigPosterImages as poster}
						<SwiperSlide>
							<a class="img-hover flex" href={poster.href} tabindex="-1">
								<img class="aspect-[16/9]" src={poster.src} alt={poster.alt} />
							</a>
						</SwiperSlide>
					{/each}
				</Swiper>
			</div>

			<!-- Left posters -->
			<div class="grid grid-cols-2 gap-4 mt-4 md:grid-cols-1 md:w-4/12 md:mt-0">
				{#each $smallPosterImages as poster}
					<a class="img-hover flex" href={poster.href}>
						<img class="w-full rounded aspect-[16/9]" src={poster.src} alt={poster.alt} />
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
				class="swiper--card {isGiftCardsSwiperGettingTouched && 'swiper--moving'} GiftCardSwiper swiper-prevent-content-shift"
				modules={[ Pagination, Autoplay ]}
				speed={600}
				grabCursor={true}
				pagination={{}}
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
				on:touchMove={()=> isGiftCardsSwiperGettingTouched = true}
				on:transitionEnd={()=> isGiftCardsSwiperGettingTouched = false}
			>
				{#each $giftCards as giftCard}
					<SwiperSlide>
						<a class="img-hover" href={giftCard.href}>
							<img class="rounded aspect-square" src={giftCard.src} alt={giftCard.alt} loading="lazy" />
						</a>
					</SwiperSlide>
				{/each}
			</Swiper>
		</CardsSection>
	{/if}


  <!-- User reviews -->
	<CardsSection title="نظــرات اخیـر کـاربران">
		<Swiper
			class="swiper--card {isReviewsSwiperGettingTouched && 'swiper--moving'} ReviewCardSwiper swiper-prevent-content-shift"
			modules={[ Pagination, Autoplay ]}
			speed={600}
			grabCursor={true}
			loop={true}
			pagination={{}}
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
			on:touchMove={()=> isReviewsSwiperGettingTouched = true}
			on:transitionEnd={()=> isReviewsSwiperGettingTouched = false}
    >
			{#each [1,2,3,4,5,6] as comment}
				<SwiperSlide>
	
					<div class="relative p-4 pb-3 bg-white rounded text-sm">
						<div class="absolute left-2 -top-2 opacity-40">
							<i class="icon-quote text-3xl opacity-50 after:absolute after:inset-0 after:h-full after:bg-gradient-to-b after:from-transparent after:to-white" />
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
    <a class="block img-hover" href="javascript:">
			<img class="w-full rounded aspect-[601/251]" src="/img/home/poster-half-width (1).png" alt="محصولات کالاف دیوتی موبایل" loading="lazy">
		</a>
    <a class="block img-hover" href="javascript:">
			<img class="w-full rounded aspect-[601/251]" src="/img/home/poster-half-width (2).png" alt="محصولات پابجی موبایل" loading="lazy">
		</a>
	</section>


	<!-- Discounted -->
	<CardsSection title="تـخـفیف ویــژه" href="javascript:">
		<ProductCardSwiper products={discountedProducts} specialDiscount={true} lazyLoading={true} />
	</CardsSection>


  <!-- Single poster -->
	<a class="flex img-hover" href="javascript:">
		<img class="rounded aspect-[200/41]" src="/img/home/poster-full-width (1).png" alt="باندل‌های داغ برای فورتنایت باز ها" loading="lazy">
	</a>


	<!-- Telegram and Instagram -->
	<div class="flex justify-center gap-4">
		<a class="block img-hover" href="javascript:">
			<img class="max-w-64 aspect-[2/1] rounded" src="/img/home/social-media-telegram.png" alt="فارس گیمر در تلگرام" loading="lazy" />
		</a>
		<a class="block img-hover" href="javascript:">
			<img class="max-w-64 aspect-[2/1] rounded" src="/img/home/social-media-instagram.png" alt="فارس گیمر در اینستاگرام" loading="lazy" />
		</a>
	</div>


  <!-- New blog posts -->
	<CardsSection title="جدیدترین پست‌ها" href="javascript:">
    <PostCardSwiper {posts} lazyLoading={true} />
	</CardsSection>


  <!-- 4 posters -->
	<section class="grid grid-cols-2 gap-4 sm:grid-cols-4 2xl:gap-8">
		{#each posters4 as poster}
			<a class="group | relative block img-hover" href="javascript:">
				<img class="aspect-[142/125] rounded 2xl:blur 2xl:brightness-90" src={poster.src} alt={poster.alt} loading="lazy" />
				<img class="aspect-[142/125] rounded | hidden absolute inset-center w-2/3 2xl:block | duration-200 group-hover:w-3/4 group-focus-visible:w-3/4" src={poster.src} loading="lazy" aria-hidden="true" />
			</a>
		{/each}
	</section>


  <!-- Single poster -->
	<a class="img-hover flex" href="javascript:">
		<img class="rounded aspect-[200/41]" src="/img/home/poster-full-width (2).png" alt="خرید ولورانت پوینت" loading="lazy">
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
