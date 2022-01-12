<script>
	import Layout from './lib/Layout.svelte'
</script>

<Layout>
	<svelte:fragment slot="before-main">
		<div class="bg-light-green font-medium flex items-center justify-center gap-2 p-2 rounded mb-4">
			<i class="icon-check-square"></i>
			<p class="text-sm">پرداخت با موفقیت انجام شد با تشکر از خرید شما</p>
		</div>

		<!-- <div class="bg-pink font-medium flex flex-wrap items-center justify-center gap-y-2 gap-x-8 p-2 rounded mb-4">
			<div class="flex items-center gap-2">
				<i class="icon-exclamation-square"></i>
				<p class="text-sm">پرداخت شما ناموفق بود</p>
			</div>
			<a class="btn btn--brand btn--outline btn--xs" href="javascript:">دوباره تلاش کنید</a>
		</div> -->
	</svelte:fragment>
		
	<svelte:fragment slot="main">
		<div class="table-wrapper">
			<table>
				<thead class="mb-4 text-sm">
					<tr class="text-gray-500">
						<!-- 1 -->
						<th>محصول</th>
						<!-- 2 -->
						<th></th>
						<!-- 3 -->
						<th>تعداد</th>
						<!-- 4 -->
						<th>جمع جزء</th>
						<!-- 5 -->
						<th></th>
					</tr>
				</thead>
				<tbody>

					<!-- START Loop -->
					<tr class="h-2 last:h-0"></tr>
					<tr class="order-details__item border-0">

						<!-- 1 - Product Image -->
						<td class="bg-gray-50 rounded-r-2xl w-28 h-28">
							<img class="rounded min-w-28 min-h-28" src="/images/product-grid.png">
						</td>

						<!-- 2 - Product Info -->
						<td class="bg-gray-50">
							<h3 class="font-semibold mb-2 text-sm min-w-24">بتل پس چپتر 2 سیزن 5</h3>
							<ul class="order-details__item__extra-content text-sm whitespace-nowrap">
								<li class="flex">
									<span>نوع اکانت: </span>
									<span class="font-medium">اپیک گیمز</span>
								</li>
								<li class="flex">
									<span>ایمیل: </span>
									<span class="font-medium">mostafa.021g@gmail.com</span>
								</li>
								<li class="flex">
									<span>رمز: </span>
									<span class="font-medium">1234</span>
								</li>
								<li class="flex">
									<span>مایل به دریافت سریع تر: </span>
									<span class="font-medium">بلی</span>
								</li>
							</ul>
						</td>

						<!-- 3 - Quantity -->
						<td class="bg-gray-50">
							<div class="bg-white rounded w-16 h-10 flex items-center justify-center">2</div>
						</td>

						<!-- 4 - Total Price -->
						<td class="bg-gray-50">
							<div class="flex items-center gap-1 whitespace-nowrap">
								<p class="text-lg font-semibold">100,000</p>
								<p class="text-sm">تومان</p>
							</div>
						</td>

						<!-- 5 - toggle -->
						<td class="bg-gray-50 rounded-l-2xl">
							<button class="order-details__item__toggle-content bg-brand hover:bg-opacity-100 bg-opacity-10 w-8 h-8 flex items-center justify-center group rounded transition-colors duration-150 ease-in">
								<i class="icon-angle-down text-brand group-hover:text-white"></i>
							</button>
						</td>

					</tr>
					<!-- END Loop -->

				</tbody>
			</table>
		</div>

		<hr class="border-gray-100 my-4">

		<ul class="space-y-2 text-sm">
			<li class="flex items-center justify-between">
				<p class="font-semibold">جمع کل سبد خرید</p>
				<div class="flex items-center gap-1 whitespace-nowrap">
					<p class="font-semibold">100,000</p>
					<p class="text-sm">تومان</p>
				</div>
			</li>
			<li class="flex items-center justify-between">
				<p class="font-semibold">تخفیف</p>
				<div class="flex items-center gap-1 whitespace-nowrap">
					<p class="font-semibold">100,000</p>
					<p class="text-sm">تومان</p>
				</div>
			</li>
			<li class="flex items-center justify-between">
				<p class="font-semibold">کیف پول</p>
				<div class="flex items-center gap-1 whitespace-nowrap">
					<p class="font-semibold">100,000</p>
					<p class="text-sm">تومان</p>
				</div>
			</li>
			<li class="flex items-center justify-between">
				<p class="font-semibold text-lg text-red">قیمت نهایی</p>
				<div class="flex items-center gap-1 whitespace-nowrap text-lg text-red">
					<p class="text-lg font-semibold">100,000</p>
					<p class="text-sm">تومان</p>
				</div>
			</li>
		</ul>

		<div class="mt-4">
			<p class="mb-2 font-semibold">کدهای خریداری شده</p>
			<ul class="grid gap-2 text-sm text-white text-opacity-95 font-semibold">
				<li class="flex items-center gap-2 justify-between p-3 bg-brand rounded text-white">
					<p>گیفت کارت نیتندو 50 دلاری</p>
					<p class="font-isans-ed">7200023</p>
				</li>
				<li class="flex items-center gap-2 justify-between p-3 bg-brand rounded text-white">
					<p>گیفت کارت نیتندو 10 دلاری</p>
					<p class="font-isans-ed">583258</p>
				</li>
			</ul>
		</div>
	</svelte:fragment>
	
	<svelte:fragment slot="sidebar">
		<ul class="space-y-2 text-sm">
			<li class="flex justify-between">
				<span>شماره سفارش</span>
				<span>980317</span>
			</li>
			<hr class="border-gray-100">
			<li class="flex justify-between">
				<span>تاریخ سفارش</span>
				<span>1400-02-29</span>
			</li>
			<hr class="border-gray-100">
			<li class="flex justify-between">
				<span>زمان تحویل</span>
				<span>تا ۴ ساعت بعد</span>
			</li>
		</ul>
	</svelte:fragment>

	<svelte:fragment slot="after-sidebar">
		<div class="text-center space-y-4 p-4 bg-white rounded">
			<h6>با ثبت نظر از ما حمایت کنید و هدیه بگیرید</h6>
			<a class="btn btn--brand btn--outline" href="javascript:">ارسال نظر</a>
		</div>
	</svelte:fragment>
</Layout>
