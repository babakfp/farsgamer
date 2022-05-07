<script>
	import Layout from './_lib/Layout.svelte'
	import Alert from '$lib/Alert.svelte'
	import CartItems from './_lib/CartItems.svelte'
</script>

<Layout>
	<svelte:fragment slot="before-main">
		<Alert class="mb-4" type="success">پرداخت شما با موفقیت انجام شد🎉.</Alert>
	</svelte:fragment>
		
	<svelte:fragment slot="main">
		<CartItems cartable={false} />
	</svelte:fragment>

	<svelte:fragment slot="get-a-gift">
		<button class="btn btn--brand btn--lg">هدیه بگیرید؟</button>
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
					<p>گیفتکارت <span class="inline-block dir-ltr font-dana-en">$50</span> Play Station</p>
					<span>980317</span>
				</li>
				<hr class="border-gray-100">
				<li class="flex justify-between">
					<p>گیفتکارت <span class="inline-block dir-ltr font-dana-en">$10</span> Play Station</p>
					<span>۵۶۷۸۴</span>
				</li>
			</ul>
		</div>
	</svelte:fragment>
</Layout>
