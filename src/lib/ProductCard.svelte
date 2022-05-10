<script>
	export let inStock = true
	export let specialDiscount = false
	export let lazyLoading = false

	const countDownDate = new Date('Jun 28, 2022 15:37:0').getTime()
	
	// Today's date and time
	let now = new Date().getTime()

	// Find the distance between now and the count down date
	$: distance = countDownDate - now

	// Time calculations for days, hours, minutes and seconds
	$: days = Math.floor(distance / (1000 * 60 * 60 * 24))
	$: hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	$: minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
	$: seconds = Math.floor((distance % (1000 * 60)) / 1000)

	setInterval(_=> {
		if ( distance > 0 ) {
			distance -= 1000
		}
	}, 1000)
</script>

<a class="group relative grid p-2 text-center rounded bg-white duration-200 ease-in-out hover:shadow-sm hover:scale-105" href="/shop/1">

	<div class="relative rounded overflow-hidden">
		<img src="/img/products/product-thumb (1).png" alt loading={lazyLoading && 'lazy'}>

		{#if inStock === false}
			<div class="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
				<p class="text-white font-bold drop-shadow-xl">نـامـوجـود</p>
			</div>
		{/if}
	</div>

	<span class="absolute top-0 left-0 py-1 px-3 bg-red-400 text-white rounded rounded-bl-none text-xs">۲۰٪</span>
	
	<div class="py-4 px-2">
		<h3 class="text-sm font-bold line-clamp-1">گیف کارد 20 دلاری استیم</h3>
	</div>

	<hr class="-mx-2 border-gray-100">

	<div class="-mb-2 h-14 flex items-center justify-center gap-2">
		{#if inStock === false}
			<span>بدونـ قیمتــ</span>
		{:else}
				<span class="font-medium line-through decoration-red-700 opacity-50">200</span>
				<span class="font-medium">100</span>
				<span class="mt-1 text-xs">تـمـنـ</span>
			<!-- <span>قیمتــ متغیـر</span> -->
		{/if}
	
		{#if specialDiscount && inStock}
			<ol class="absolute bottom-3 right-2 left-2 flex justify-evenly gap-2 bg-white bg-opacity-75 backdrop-blur-xs rounded text-xs duration-200 ease-in-out group-hover:opacity-0">
				<li>
					<div>ثانیه</div>
					<div class="font-bold">{distance > 0 ? seconds : 0}</div>
				</li>
				<li>
					<div>دقیقه</div>
					<div class="font-bold">{distance > 0 ? minutes : 0}</div>
				</li>
				<li>
					<div>ساعت</div>
					<div class="font-bold">{distance > 0 ? hours : 0}</div>
				</li>
				<li>
					<div>روز</div>
					<div class="font-bold">{distance > 0 ? days : 0}</div>
				</li>
			</ol>
		{/if}
	</div>
	
</a>
