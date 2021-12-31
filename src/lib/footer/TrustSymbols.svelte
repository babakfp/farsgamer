<script>
	const images = [
		{ src: 'static/images/trust-symbols/enamad.ir.png' },
		{ src: 'static/images/trust-symbols/samandehi.ir.png' },
		{ src: 'static/images/trust-symbols/ircg.ir.png' },
		{ src: 'static/images/trust-symbols/ecunion.ir.png' },
		{ src: 'static/images/trust-symbols/zarinpal.com.png' },
		{ src: 'static/images/trust-symbols/pay.ir.png' },
	]
</script>

<div class="flex flex-wrap justify-center gap-4">
	{#each images as img}
		<a class="flex w-20 border border-gray-200 rounded duration-100 hover:shadow-md" href="javascript:">
			<img class="rounded" src={img.src} alt>
		</a>
	{/each}
</div>
