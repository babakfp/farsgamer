<script>
	import { isLoggedIn, isCartEmpty } from '$store/auth.js'
	import DiscountInput from '$lib/DiscountInput.svelte'
	import CartItems from './lib/CartItems.svelte'
	import Layout from './lib/Layout.svelte'
</script>

{#if !$isCartEmpty}

	<Layout>
		<svelte:fragment slot="main">
			<CartItems />
		</svelte:fragment>
		
		<svelte:fragment slot="sidebar">
			{#if !$isLoggedIn}
				<a class="btn btn--brand btn--lg w-full" href="/login">ورود به حساب</a>
			{/if}
		
			<ul class="space-y-2 text-sm">
				<li class="flex items-center justify-between">
					<span>جمع جزء</span>
					<div class="flex items-center gap-1">
						<span class="font-bold">200,000</span>
						<span class="mt-0.5 text-2xs text-gray-500">تــمــنـــ</span>
					</div>
				</li>
				<hr class="border-gray-100">
				<li class="flex items-center justify-between">
					<span>تخفیف</span>
					<div class="flex items-center gap-1">
						<span class="font-bold">200,000</span>
						<span class="mt-0.5 text-2xs text-gray-500">تــمــنـــ</span>
					</div>
				</li>
				<hr class="border-gray-100">
				<li class="flex items-center justify-between">
					<span>جمع کل</span>
					<div class="flex items-center gap-1">
						<span class="font-bold">200,000</span>
						<span class="mt-0.5 text-2xs text-gray-500">تــمــنـــ</span>
					</div>
				</li>
			</ul>
	
			<DiscountInput wrapperClass="-mt-4" />
			<!-- <div class="bg-light-green font-medium flex items-center justify-center gap-2 p-2 rounded mb-2">
				<i class="icon-check-square"></i>
				<p class="text-sm">کد تخفیف با موفقیت اعمال شد</p>
			</div> -->
			<!-- <div class="bg-pink font-medium flex items-center justify-center gap-2 p-2 rounded mb-2">
				<i class="icon-exclamation-square"></i>
				<p class="text-sm">کد تخفیف اشتباه هست یا قبلا استفاده شده</p>
			</div> -->

			<!-- Show this element if user was logged in -->
			<div class="checkbox checkbox--brand">
				<input class="checkbox__field" type="checkbox" name="rememberme" id="rememberme" />
				<label for="rememberme" class="checkbox__label text-sm">استفاده از کیف پول</label>
			</div>

			<ol class="grid gap-2 xs:grid-cols-2 xs:gap-4 xl:grid-cols-1 xl:gap-2">
				<li class="block w-full choose-payment-gateway">
					<input class="hidden" type="radio" id="zarinpal" name="payment-gateway" value="zarinpal" checked>
					<label class="flex items-center gap-2 mb-0 p-2 border-2 border-gray-200 rounded duration-200 ease-in-out cursor-pointer hover:border-brand" for="zarinpal">
						<img class="rounded w-12" src="/images/zarinpal-sm.png" alt>
						<div class="text-sm text-gray-600">
							<h6 class="font-bold">پرداخت امن زرین‌پال</h6>
							<p class="mt-1 leading-3 text-2xs text-gray-500">پرداخت به وسیله کلیه کارت های عضو شبکه شتاب</p>
						</div>
					</label>
				</li>
				<li class="block w-full choose-payment-gateway">
					<input class="hidden" type="radio" id="payir" name="payment-gateway" value="payir">
					<label class="flex items-center gap-2 mb-0 p-2 border-2 border-gray-200 rounded duration-200 ease-in-out cursor-pointer hover:border-brand" for="payir">
						<img class="rounded w-12" src="/images/payir.png" alt>
						<div class="text-sm text-gray-600">
							<h6 class="font-bold">پرداخت امن زرین‌پال</h6>
							<p class="mt-1 leading-3 text-2xs text-gray-500">پرداخت به وسیله کلیه کارت های عضو شبکه شتاب</p>
						</div>
					</label>
				</li>
			</ol>
			
			<button class="btn btn--brand btn--submit btn--lg w-full -mt-4" disabled={!$isLoggedIn} type="submit">ادامه تسویه حساب</button>
		</svelte:fragment>
	</Layout>

{:else}

	<h1>سبد خرید خالی است.</h1>

{/if}

<style lang="postcss">
	.choose-payment-gateway input:checked + label {
		@apply border-brand;
	}
	.choose-payment-gateway input:checked + label h6,
	.choose-payment-gateway input:checked + label p {
		@apply text-brand;
	}
</style>
