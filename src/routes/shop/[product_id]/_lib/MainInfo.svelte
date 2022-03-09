<script>
	import StarRating from '$lib/StarRating.svelte'
</script>

<div class="w-full mt-4 sm:mt-6 p-6 bg-white rounded md:order-1 md:mt-0">

	<h1 class="font-bold">پک فورست لجند | Forst Legends pack</h1>

	<div class="flex items-center gap-2 mt-2">
		<StarRating />
		<span class="text-xs">
			<span class="text-2xs text-gray-300">(</span>
			<span>از <b>450</b> کاربر</span>
			<span class="text-2xs text-gray-300">)</span>
		</span>
	</div>

	<div class="inline-flex items-center gap-2 mt-4 px-4 py-2 text-yellow-700 text-sm bg-yellow bg-opacity-10 rounded">
		<img class="w-7" src="/img/gem.png" alt>
		<div>
			<b class="font-montserrat">300</b>
			<span class="font-medium">امتیاز</span>
		</div>
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

</div>
