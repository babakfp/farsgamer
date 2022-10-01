<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay } from 'swiper'
	import ContactInfo from '$partials/Footer/ContactInfo.svelte'

	const posters = [
		{ imgSrc: '/img/team/team (1).jpg ' },
		{ imgSrc: '/img/team/team (2).jpg ' },
		{ imgSrc: '/img/team/team (3).jpg ' },
	]
</script>

<svelte:head>
	<title>تماس با ما</title>
</svelte:head>

<div class="max-w-3xl mx-auto mt-4 p-2 bg-white rounded">
	<Swiper
		class="swiper--gallery max-w-3xl"
		modules={[ Pagination, Autoplay ]}
		loop={true}
		speed={600}
		grabCursor={true}
		pagination={{}}
		autoplay={{ delay: 5000, disableOnInteraction: false }}
    touchEventsTarget="container"
  >
		{#each posters as poster}
			<SwiperSlide>
				<a href={poster.href || 'javascript:'}>
					<img src={poster.imgSrc} alt loading="lazy">
				</a>
			</SwiperSlide>
		{/each}
	</Swiper>
	
	<p class="p-2 pt-4 leading-7 lg:p-4 lg:pt-6">تیم فارس گیمر ( فورتنایت‌فا سابق ) از اوایل ماه مهر سال ۱۳۹۷ شروع به کار کرد و اولین فروشگاه در ایران بود که فقط محصولات بازی پر طرف دار فورتنایت را عرضه میکرد. بعد از گذشت 3 سال با توجه به نیاز جامعه گیمری ایران و موجود نبودن یک وب سایت تخصصی بالاخره فورتنایت‌فا تصمیم بر ایجاد یک مرجع تخصصی برای تمامی گیمر های ایران کرد، تا بتواند علاوه بر به ارمقان آوردن یک فروشگاه تخصصی در حوزه گیم تمامی نیاز های یک گیمر را برطرف سازد. با توجه به وجود وب سایت های مشابه زیاد تیم فارس گیمر همواره سعی بر این داشته تا با کار و تلاش های روز افزون و هچنین قیمت های عالی جهت در هم شکستن قیمت های نجومی بازار رضایت شما عزیزان را جلب نماید و در این راه سخت با کمک شما عزیزان در این 5 سال موق عمل کرده است. فروشگاه اینترنتی فارس گیمر بر این باور دارد که رضایت مشتری و رضایت مشتری مهم ترین نکته در فرایند فروش است و به همین منظور علاوه بر کاهش قیمت محصولات خود جهت حمایت از گیمر های ایرانی پشتیبانی 24 ساعته در هفته را راه اندازی کرده است تا همه مشتریان در هر ساعت از شبانه روز بتوانند به خدمات دسترسی داشته باشند.</p>
</div>

<div class="max-w-3xl mx-auto mt-8 pb-8">
	<ContactInfo />
</div>
