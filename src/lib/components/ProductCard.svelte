<script>
	export let id
	export let thumb
	export let title
	export let price

	export let inStock = true
	export let specialDiscount = false
	export let lazyLoading = false

	const currentDate = new Date()
	const nowDate = new Date().getTime()

	// Milliseconds until the next weekend
	const countdownDate = currentDate.setDate(currentDate.getDate() + (7 - currentDate.getDay()))

	// Milliseconds between dates. Used 1000ms to prevent the 1 second jump.
	$: distance = countdownDate - nowDate - 1000

	// Time calculations for days, hours, minutes and seconds
	$: days = Math.floor(distance / (1000 * 60 * 60 * 24))
	$: hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	$: minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
	$: seconds = Math.floor((distance % (1000 * 60)) / 1000)

	if (specialDiscount) {
		setInterval(() => {
			if (distance > 0) {
				distance -= 1000
			}
		}, 1000)
	}
</script>

<a
	class="group relative grid p-2 text-center rounded bg-white duration-200 ease-in-out outline-card"
	href="/shop/{id}"
>
	<div class="relative rounded overflow-hidden">
		<img class="aspect-[3/4]" src={thumb} alt={title} loading={lazyLoading && "lazy"} />

		{#if inStock === false}
			<div class="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
				<p class="text-white font-bold drop-shadow-xl">نـامـوجـود</p>
			</div>
		{/if}
	</div>

	<span
		class="absolute top-0 left-0 py-1 px-3 bg-red-400 text-white rounded-r-sm rounded-bl-[2px] rounded-tl text-xs"
	>
		٪۲۰
	</span>

	<div class="py-4 px-2">
		<h3 class="text-sm font-bold line-clamp-1">
			{title}
		</h3>
	</div>

	<hr class="-mx-2 border-gray-100" />

	<div class="flex items-center justify-center gap-1 h-14 -mb-2">
		{#if inStock === false}
			<span>بدونـ قیمتــ</span>
		{:else}
			{#if price.afterDiscount}
				<span class="line-through text-gray-400 text-xs">
					{price.beforeDiscount}
				</span>
			{/if}
			<span class="font-medium">
				{price.afterDiscount || price.beforeDiscount}
			</span>
			<span class="text-xs">تومان</span>
			<!-- <span>قیمتــ متغیـر</span> -->
		{/if}

		{#if specialDiscount && inStock}
			<ol
				class="absolute bottom-3 right-2 left-2 flex justify-evenly gap-2 bg-white bg-opacity-75 backdrop-blur-xs rounded text-xs duration-200 ease-in-out group-hover:opacity-0"
			>
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
