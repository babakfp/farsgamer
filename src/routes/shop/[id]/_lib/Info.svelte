<script>
	import StarRating from "$components/StarRating.svelte"
	export let title
	export let rating
	export let ratingCount
	export let coins
</script>

<div class="relative h-full p-6 bg-white rounded">
	<h1 class="font-bold font-dana-en">{title}</h1>

	<div class="flex items-center gap-2 mt-2">
		<StarRating {rating} />
		<span class="text-xs">
			<span class="text-2xs text-gray-300">(</span>
			<span>از <b>{ratingCount}</b> کاربر</span>
			<span class="text-2xs text-gray-300">)</span>
		</span>
	</div>

	<div
		class="inline-flex items-center gap-2 mt-4 px-4 py-2 text-yellow-700 text-sm bg-yellow bg-opacity-10 rounded"
	>
		<img class="w-6 rotate-45 !shadow-none" src="/img/coin.png" alt />
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
		<li>
			<p class="inline">لطفا قبل از ثبت سفارش, تایید دو مرحله‌ای اکانت خود را غیرفعال کنید.</p>
		</li>
		<li><p class="inline">لطفا قبل از خرید, توضیحات محصول را به درستی مطالعه کنید.</p></li>
	</ul>
</div>
