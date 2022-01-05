<script>
	export let inStock = true
	export let specialDiscount = false
</script>

<a class="group relative grid p-2 text-center rounded bg-white duration-200 ease-in-out hover:shadow-sm hover:shadow-gray-200 hover:scale-105" href="javascript:">

	<div class="relative rounded overflow-hidden">
		<img src="/images/product-thumb.png" alt>
		{#if inStock === false}
			<div class="absolute inset-0 flex items-center justify-center bg-gray-900 backdrop-blur-sm bg-opacity-40">
				<p class="text-white font-bold drop-shadow-xl">نـامـوجـود</p>
			</div>
		{/if}
	</div>

	<div class="absolute top-0 left-0 py-1 pl-3 pr-4 bg-red-400 text-white rounded rounded-bl-none text-xs">٪۲۰</div>
	
	<div class="p-2 mt-2 space-y-2">
		<h3 class="font-bold text-sm line-clamp-1">گیف کارد 20 دلاری استیم</h3>
		<p class="text-gray-400 text-xs line-clamp-1">Fortnite</p>
	</div>

	<hr class="-mx-2 border-gray-100">

	<div class="-mb-2 h-14 flex items-center justify-center gap-1">
		{#if inStock === false}
			<span>بدونـ قیمتـــ</span>
		{:else}
			<span class="font-montserrat font-semibold line-through opacity-50">500</span>
			<span class="font-montserrat font-semibold">300</span>
			<span>تومانـ</span>
			<!-- <span>قیمتـــ متغیـر</span> -->
		{/if}
	
		{#if specialDiscount && inStock}
			<ul class="absolute bottom-3 right-2 left-2 flex justify-evenly gap-2 bg-white bg-opacity-60 backdrop-blur-sm rounded text-xs duration-200 ease-in-out group-hover:opacity-0">
				<li>
					<div>روز</div>
					<div class="font-bold">2</div>
				</li>
				<li>
					<div>ساعت</div>
					<div class="font-bold">23</div>
				</li>
				<li>
					<div>دقیقه</div>
					<div class="font-bold">48</div>
				</li>
				<li>
					<div>ثانیه</div>
					<div class="font-bold">02</div>
				</li>
			</ul>
		{/if}
	</div>
	
</a>
