<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay } from 'swiper'
	import CardsSection from '$lib/CardsSection.svelte'
	import ImgShadowSelf from '$lib/ImgShadowSelf.svelte'
	import ProductCardSwiper from '$lib/ProductCardSwiper.svelte'
	import posts from '$db/posts.js'
	import PostCard from '$lib/PostCard.svelte'
	import StarRating from '$lib/StarRating.svelte'

	const giftCardImages = [
		{ src: '/img/gift-card/play-station.png' },
		{ src: '/img/gift-card/apple.png' },
		{ src: '/img/gift-card/steam.png' },
		{ src: '/img/gift-card/amazon.png' },
		{ src: '/img/gift-card/xbox.png' },
		{ src: '/img/gift-card/google-play.png' },
	]

	const mainPosters = [
		{ imgSrc: '/img/home/home-main-poster (1).png' },
		{ imgSrc: '/img/home/home-main-poster (2).png' },
		{ imgSrc: '/img/home/home-main-poster (3).png' },
		{ imgSrc: '/img/home/home-main-poster (4).png' },
	]

	const mainSecondPosters = [
		{ imgSrc: '/img/home/home-second-poster (1).png' },
		{ imgSrc: '/img/home/home-second-poster (2).png' },
	]
</script>

<svelte:head>
	<title>فارس گیمر - اولین مرجع رسمی فروش بازی های آنلاین</title>
</svelte:head>

<div class="space-y-8 lg:space-y-12">

	<!--
		Top Big Posters
		----------------
	-->
	<section class="md:flex md:gap-4">
		<div class="md:w-8/12">

			<!--
				Main Posters
				-----------
			-->
			<Swiper
				class="top-big-posters"
				modules={[ Pagination, Autoplay ]}
				loop={true}
				speed={600}
				grabCursor={true}
				pagination={{ clickable: true, dynamicBullets: true }}
				autoplay={{ delay: 5000, disableOnInteraction: false }}
			>
				{#each mainPosters as poster}
					<SwiperSlide>
						<a class="img-link flex" href={poster.href || 'javascript:'}>
							<img src={poster.imgSrc} alt>
						</a>
					</SwiperSlide>
				{/each}
			</Swiper>
		</div>

		<!--
			Second Posters
			-----------
		-->
		<div class="grid grid-cols-2 gap-4 mt-4 md:grid-cols-1 md:w-4/12 md:mt-0">
			{#each mainSecondPosters as poster}
				<a class="img-link flex" href={poster.href || 'javascript:'}>
					<img class="w-full rounded" src={poster.imgSrc} alt>
				</a>
			{/each}
		</div>
	</section>

	<!-- -->
	<CardsSection title="پرفروشـترین های هـفته" href="javascript:">
		<ProductCardSwiper />
	</CardsSection>

	<!--
		Gift Cards
		----------
	-->
	<CardsSection title="گـیفتــکارد ها">
		<Swiper
			class="box-carousel"
			modules={[ Pagination, Autoplay ]}
			speed={600}
			grabCursor={true}
			pagination={{ clickable: true }}
			autoplay={{ delay: 5000, disableOnInteraction: false }}
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
			{#each giftCardImages as img}
				<SwiperSlide>
					<ImgShadowSelf src={img.src} />
				</SwiperSlide>
			{/each}
		</Swiper>
	</CardsSection>

	<!--
		User Reviews
		------------
	-->
	<CardsSection title="نظــراتـــ اخیر کــاربــران">
		<Swiper
			class="box-carousel"
			modules={[ Pagination, Autoplay ]}
			speed={600}
			grabCursor={true}
			pagination={{ clickable: true }}
			autoplay={{ delay: 5000, disableOnInteraction: false }}
			spaceBetween={16}
			breakpoints={{
				640:  { slidesPerView: 2 },
				840: 	{ slidesPerView: 3 },
				1024: { slidesPerView: 2 },
				1140: { slidesPerView: 3 },
				1400: { slidesPerView: 4 },
				1600: { slidesPerView: 5 },
			}}
		>
			{#each [1,2,3,4,5,6] as comment}
				<SwiperSlide>
	
					<div class="relative p-4 pb-3 bg-white rounded text-sm">
						<div class="absolute left-2 -top-2 opacity-40">
							<i class="icon-quote !leading-none text-3xl opacity-50 after:absolute after:inset-0 after:h-full after:bg-gradient-to-b after:from-transparent after:to-white"></i>
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
	
	<!--
		2 Posters
		---------
	-->
	<section class="grid gap-4 sm:grid-cols-2">
		<a class="flex" href="javascript:">
			<img class="w-full rounded" src="/img/home/poster-half-width (1).png" alt>
		</a>
		<a class="flex" href="javascript:">
			<img class="w-full rounded" src="/img/home/poster-half-width (2).png" alt>
		</a>
	</section>

	<!-- -->
	<CardsSection title="تخفیفـــ های ویــژه" href="javascript:">
		<ProductCardSwiper specialDiscount={true} />
	</CardsSection>

	<!--
		1 Poster
		--------
	-->
	<a class="flex hover:opacity-90" href="javascript:">
		<img class="rounded" src="/img/home/poster-full-width (1).png" alt>
	</a>

	<!--
		Telegram | Instagram
		--------------------
	-->
	<div class="flex justify-center gap-4">
		<ImgShadowSelf class="max-w-64" src="/img/home/social-media-telegram.png" alt="فارس گیمر در تلگرام" />
		<ImgShadowSelf class="max-w-64" src="/img/home/social-media-instagram.png" alt="فارس گیمر در اینستاگرام" />
	</div>

	<!--
		Recent Blog Posts
		-----------------
	-->
	<CardsSection title="جدیدترین پست ها" href="javascript:">
		<Swiper
			class="box-carousel"
			modules={[ Pagination, Autoplay ]}
			speed={600}
			grabCursor={true}
			pagination={{ clickable: true }}
			autoplay={{ delay: 5000, disableOnInteraction: false }}
			spaceBetween={16}
			slidesPerView={2}
			breakpoints={{
				640:  { slidesPerView: 3 },
				840: 	{ slidesPerView: 4 },
				1024: { slidesPerView: 3 },
				1140: { slidesPerView: 4 },
				1280: { slidesPerView: 5 },
				1800: { slidesPerView: 6 },
			}}
		>
			{#each posts as post}
				<SwiperSlide><PostCard id={post.id} title={post.title} featuredImage={post.featuredImage} /></SwiperSlide>
			{/each}
			{#each posts as post}
				<SwiperSlide><PostCard id={post.id} title={post.title} featuredImage={post.featuredImage} /></SwiperSlide>
			{/each}
		</Swiper>
	</CardsSection>

	<!--
		4 Posters
		---------
	-->
	<section class="grid grid-cols-2 gap-4 sm:grid-cols-4">
		<ImgShadowSelf src="/img/home/poster-1-4-width (1).png" />
		<ImgShadowSelf src="/img/home/poster-1-4-width (2).png" />
		<ImgShadowSelf src="/img/home/poster-1-4-width (3).png" />
		<ImgShadowSelf src="/img/home/poster-1-4-width (4).png" />
	</section>

	<!--
		1 Poster
		--------
	-->
	<a class="img-link flex" href="javascript:">
		<img class="rounded" src="/img/home/poster-full-width (2).png" alt>
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
</style>
