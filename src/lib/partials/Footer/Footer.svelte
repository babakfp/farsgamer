<script>
	import WhyUs from './WhyUs.svelte'
	import ContactInfo from './ContactInfo.svelte'
	import Social from './Social.svelte'
	import TrustSymbols from './TrustSymbols.svelte'
</script>

<footer class="grid gap-8 p-8 pb-20 text-sm bg-white border-t border-gray-100 md:text-base">

  <p class="sm:leading-6 md:leading-7">تیم فارس گیمر از اوایل ماه مهر سال ۱۳۹۷ شروع به کار کرد و اولین فروشگاه در ایران هست که فقط محصولات بازی پر طرف دار فورتنایت را عرضه میکند . با توجه به وجود وب سایت های مشابه زیاد فارس گیمر سعی بر این داشته تا با کار و تلاش و قیمت های عالی رضایت شما عزیزان را جلب نماید و در این راه تقریبا موفق بوده است.</p>

	<WhyUs />

  <p class="sm:leading-6 md:leading-7">فروشگاه فارس گیمر براین باور داردکه رضایت مشتری مهم ترین نکته در فروش بیشتر محصولات است و به همین منظور قیمت محصولات خود را با اختلاف قابل توجهی نسبت به سایر فروشگاه ها عرضه می‌کند.</p>

	<hr class="border-gray-100">

	<ContactInfo />

	<hr class="border-gray-100">

	<TrustSymbols />
	<Social />

	<a class="btn btn--gray btn--outline hover:!bg-transparent focus:!bg-transparent hover:border-brand focus:border-brand | justify-self-center | text-sm font-code dir-ltr" href="https://t.me/babakfp" target="_blank" rel="noreferrer noopener">
		👨‍💻 Developer: @babakfp
	</a>

</footer>
