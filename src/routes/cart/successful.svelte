<script>
	import Layout from './lib/Layout.svelte'
	import Alert from '$lib/Alert.svelte'
	import CartItems from './lib/CartItems.svelte'
</script>

<Layout>
	<svelte:fragment slot="before-main">
		<Alert class="mb-4" type="success" content="پرداخت شما با موفقیت انجام شد🎉." />
		
		<!-- <div class="bg-pink font-medium flex flex-wrap items-center justify-center gap-y-2 gap-x-8 p-2 rounded mb-4">
			<div class="flex items-center gap-2">
				<i class="icon-exclamation-square"></i>
				<p class="text-sm">پرداخت شما ناموفق بود</p>
			</div>
			<a class="btn btn--brand btn--outline btn--xs" href="javascript:">دوباره تلاش کنید</a>
		</div> -->
	</svelte:fragment>
		
	<svelte:fragment slot="main">
		<CartItems cartable={false} />
	</svelte:fragment>
	
	<svelte:fragment slot="sidebar">
		<ul class="space-y-2 text-sm">
			<li class="flex justify-between">
				<span>کل مبلغ خالص سبد خرید</span>
				<span>4,500,000</span>
			</li>
			<hr class="border-gray-100">
			
			<li class="flex justify-between">
				<span>تخفیف</span>
				<span>250,000</span>
			</li>
			<hr class="border-gray-100">
			
			<li class="flex justify-between">
				<span>پرداختی از کیف پول</span>
				<span>2,000,000</span>
			</li>
		</ul>

		<ul class="space-y-2 text-sm">
			<li class="flex justify-between">
				<span>کل مبلغ پرداخت شده</span>
				<span>4,250,000</span>
			</li>
			<hr class="border-gray-100">

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

		<div class="text-sm">
			<p class="mb-2 font-bold">کدهای خریداری شده</p>
			<ul class="space-y-2">
				<li class="flex justify-between">
					<span>گیفتکارت <span class="font-montserrat font-medium">50$</span> Play Station</span>
					<span>980317</span>
				</li>
				<hr class="border-gray-100">
				<li class="flex justify-between">
					<span>گیفتکارت <span class="font-montserrat font-medium">10$</span> Play Station</span>
					<span>۵۶۷۸۴</span>
				</li>
			</ul>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="after-sidebar">
		<button class="btn btn--brand btn--lg">هدیه بگیرید؟</button>
	</svelte:fragment>
</Layout>
