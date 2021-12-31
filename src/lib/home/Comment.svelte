<script>
	import StarRating from '$lib/StarRating.svelte'
</script>

<div class="relative bg-white rounded p-4 text-sm">
	<div class="quote-icon absolute left-2 -top-2 opacity-40">
		<i class="icon-quote text-3xl"></i>
	</div>

	<p class="line-clamp-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.<p>
	<span class="text-xs text-gray-500 mt-2 block line-clamp-1">محصولات پابجی موبایل | pubg mobile</span>
	
	<hr class="border-gray-100 -mx-4 mt-3 pt-3">
	<div class="flex items-center justify-between">
		<span>علیرضا خانی</span>
		<StarRating />
	</div>
</div>

<style lang="postcss">
	.quote-icon::after {
		@apply absolute inset-0 bg-gradient-to-b from-transparent to-white;
		content: "";
	}
</style>
