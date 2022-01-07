<script>
	const images = [
		{ src: '/images/trust-symbols/enamad.ir.png' },
		{ src: '/images/trust-symbols/samandehi.ir.png' },
		{ src: '/images/trust-symbols/ircg.ir.png' },
		{ src: '/images/trust-symbols/ecunion.ir.png' },
		{ src: '/images/trust-symbols/zarinpal.com.png' },
		{ src: '/images/trust-symbols/pay.ir.png' },
	]
</script>

<div class="flex flex-wrap justify-center gap-4">
	{#each images as img}
		<a class="flex w-20 border border-gray-100 rounded duration-300 ease-out hover:scale-125" href="javascript:">
			<img class="rounded" src={img.src} alt>
		</a>
	{/each}
</div>
