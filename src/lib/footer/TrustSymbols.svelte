<script>
	const images = [
		{ src: '/img/trust-symbols/enamad.ir.png' },
		{ src: '/img/trust-symbols/samandehi.ir.png' },
		{ src: '/img/trust-symbols/ircg.ir.png' },
		{ src: '/img/trust-symbols/ecunion.ir.png' },
		{ src: '/img/trust-symbols/zarinpal.com.png' },
		{ src: '/img/trust-symbols/pay.ir.png' },
	]
</script>

<div class="flex flex-wrap justify-center gap-4">
	{#each images as img}
		<a class="flex w-20 border border-gray-100 rounded overflow-hidden duration-300 ease-out hover:scale-150 lg:hover:scale-125 hover:shadow-lg" href="javascript:">
			<img src={img.src} alt>
		</a>
	{/each}
</div>
