<script>
	import StarRating from '$lib/StarRating.svelte'
</script>

<div class="w-full mt-4 p-6 bg-white rounded lg:order-1 lg:mt-0">

	<h1 class="font-bold">پک فورست لجند | Forst Legends pack</h1>

	<div class="flex items-center gap-2 mt-2">
		<StarRating />
		<span class="text-xs">
			<span class="text-2xs text-gray-300">(</span>
			<span>از <b>450</b> کاربر</span>
			<span class="text-2xs text-gray-300">)</span>
		</span>
	</div>

	<div class="flex items-center gap-2 mt-4 px-4 py-3 text-yellow-700 text-sm bg-yellow bg-opacity-10 rounded">
		<img class="w-8" src="/img/gem.png" alt />
		<b class="font-montserrat">300</b>
		<span>امتیاز</span>
	</div>

	<ul class="mt-4 list-disc list-inside space-y-1 text-sm">
		<li>
			<span>منطقه فعال‌سازی</span> : 
			<span>همه کشورها</span>
		</li>
		<li>
			<span>زمان تحویل</span> : 
			<span><b>1</b> الی <b>5</b> ساعت کاری</span>
		</li>
		<li>
			<span>پلتفورم</span> : 
			<ul class="inline space-x-1 font-montserrat font-medium">
				<li class="inline underline decoration-wavy decoration-gray-300">IOS</li>
				<li class="inline underline decoration-wavy decoration-gray-300">Android</li>
				<li class="inline underline decoration-wavy decoration-gray-300">Nintendo</li>
				<li class="inline underline decoration-wavy decoration-gray-300">Xbox</li>
				<li class="inline underline decoration-wavy decoration-gray-300">PS4</li>
				<li class="inline underline decoration-wavy decoration-gray-300">PC</li>
			</ul>
		</li>
	</ul>

	<ul class="mt-4 list-disc list-inside space-y-1 text-sm">
		<li><p class="inline">لطفا قبل از ثبت سفارش, تایید دو مرحله‌ای اکانت خود را غیرفعال کنید.</p></li>
		<li><p class="inline">لطفا قبل از خرید, توضیحات محصول را به درستی مطالعه کنید.</p></li>
	</ul>

</div>
