<script>
	import Rating from '$components/Rating.svelte'
</script>

<div class="bg-gray-50 rounded p-3 accordion">
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-4 sm:w-full">
			<img class="w-20 h-20 rounded" src="/img/products/product-thumb (1).png" alt loading="lazy">
			
			<div class="grid gap-4 justify-items-start sm:flex sm:items-center sm:justify-between sm:w-full">
				<h3 class="font-medium text-sm sm:text-base">گیف کارد steam</h3>
				
				<button class="btn btn--brand btn--xs gap-1 accordion-btn sm:ml-2">
					<span>ثبت نظر</span>
				</button>
			</div>
		</div>
	</div>

	<div class="mt-4 accordion-body hidden">
		<form class="bg-white rounded p-4 md:p-6" action="">
			<h4 class="font-bold">ثبت نظر</h4>
			<p class="mt-1 text-sm">اگر در سفارش شما تاخیر یا مشکلی پیش اومده باشه, لطفا با پشتیبانی تماس بگیرید. همکاران ما ۲۴ ساعته آماده کمک به شما هستند.</p>
			<textarea class="input mt-4" rows="4" placeholder="نظر خود را وارد نمایید"></textarea>
			
			<div class="flex flex-wrap items-center justify-between mt-4 gap-4">
				<div class="flex flex-wrap items-center gap-2">
					<p class="text-sm">میزان رضایت شما از این سفارش چه مقدار است؟</p>
					<Rating />
				</div>

				<button type="submit" class="btn btn--brand btn--xs">ثبت نظر</button>
			</div>

		</form>
	</div>
</div>
