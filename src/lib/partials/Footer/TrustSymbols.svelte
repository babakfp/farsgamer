<script>
	const images = [
		{ alt: 'نماد تجارت الکترونیکی اینماد - به آدرس enamad.ir', src: '/img/trust-symbols/enamad.ir.png' },
		{ alt: 'نماد ساماندهی محتوای فضای مجازی - به آدرس samandehi.ir', src: '/img/trust-symbols/samandehi.ir.png' },
		{ alt: 'نماد پنیاد ملی بازی‌های رایانه‌ای - به آدرس ircg.ir', src: '/img/trust-symbols/ircg.ir.png' },
		{ alt: 'نماد اتحادیه کشوری کسب‌وکارهای مجازی - به آدرس ecunion.ir', src: '/img/trust-symbols/ecunion.ir.png' },
		{ alt: 'نماد درگاه پرداخت واسط زرین‌پال - به آدرس zarinpal.com', src: '/img/trust-symbols/zarinpal.com.png' },
		{ alt: 'نماد درگاه پرداخت واسط پی - به آدرس pay.ir', src: '/img/trust-symbols/pay.ir.png' },
	]
</script>

<div class="flex flex-wrap justify-center gap-4">
	{#each images as img}
    <!-- svelte-ignore a11y-invalid-attribute -->
		<a class="flex w-20 border border-gray-100 rounded overflow-hidden duration-300 ease-out transition-transform hover:scale-150 hover:z-1 hover:shadow-lg lg:hover:scale-125" href="javascript:">
			<img src={img.src} alt={img.alt} loading="lazy">
		</a>
	{/each}
</div>
