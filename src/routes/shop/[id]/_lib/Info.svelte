<script>
	import StarRating from '$lib/StarRating.svelte'
	export let title
	export let rating
	export let ratingCount
	export let coins
</script>

<div class="relative w-full mt-5 sm:mt-6 p-6 bg-white rounded md:order-1 md:mt-0">

	<h1 class="font-bold">{title}</h1>

	<div class="flex items-center gap-2 mt-2">
		<StarRating {rating} />
		<span class="text-xs">
			<span class="text-2xs text-gray-300">(</span>
			<span>از <b>{ratingCount}</b> کاربر</span>
			<span class="text-2xs text-gray-300">)</span>
		</span>
	</div>

	<div class="inline-flex items-center gap-2 mt-4 px-4 py-2 text-yellow-700 text-sm bg-yellow bg-opacity-10 rounded">
		<img class="w-6 rotate-45" src="/img/coin.png" alt>
		<b>{coins}</b>
		<span class="-mr-0.5 font-medium leading-5 self-end">سکه</span>
	</div>

	<ul class="mt-4 list-disc list-inside space-y-1 text-sm">
		<li>
			<span>منطقه فعال‌سازی:</span>
			<span>همه کشورها</span>
		</li>
		<li>
			<span>زمان تحویل:</span>
			<span><b>1</b> الی <b>5</b> ساعت کاری</span>
		</li>
		<li>
			<span>پلتفورم:</span>
			<span>IOS, Android, Nintendo, Xbox, PS4, PC</span>
		</li>
	</ul>

	<ul class="mt-4 list-disc list-inside space-y-1 text-sm">
		<li><p class="inline">لطفا قبل از ثبت سفارش, تایید دو مرحله‌ای اکانت خود را غیرفعال کنید.</p></li>
		<li><p class="inline">لطفا قبل از خرید, توضیحات محصول را به درستی مطالعه کنید.</p></li>
	</ul>

	<div class="-z-1 absolute w-full h-full -bottom-1 -left-1 bg-yellow bg-opacity-10 rounded md:-bottom-2 md:-left-2 xl:-bottom-3 xl:-left-3"></div>
	<div class="-z-1 absolute w-full h-full -top-1 -right-1 bg-yellow bg-opacity-10 rounded md:-top-2 md:-right-2 xl:-top-3 xl:-right-3"></div>

</div>
