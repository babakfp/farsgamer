<script>
	import { isLoggedIn, isCartEmpty } from '$store/auth.js'
	import FieldNumberWithBtnInside from '$lib/FieldNumberWithBtnInside.svelte'
	import Checkbox from '$lib/Checkbox.svelte'
	import CartItems from './_lib/CartItems.svelte'
	import Layout from './_lib/Layout.svelte'
</script>

{#if !$isCartEmpty}

	<Layout>
		<svelte:fragment slot="main">
			<CartItems />
		</svelte:fragment>
		
		<svelte:fragment slot="sidebar">
			{#if !$isLoggedIn}
				<a class="btn btn--brand btn--submit w-full" href="/login">ورود به حساب</a>
			{/if}
		
			<ul class="space-y-2 text-sm">
				<li class="flex items-center justify-between">
					<span>جمع جزء</span>
					<div class="flex items-center gap-1">
						<span class="font-bold">200,000</span>
						<span class="mt-0.5 text-2xs text-gray-500">تـمـنـ</span>
					</div>
				</li>
				<hr class="border-gray-100">
				<li class="flex items-center justify-between">
					<span>تخفیف</span>
					<div class="flex items-center gap-1">
						<span class="font-bold">200,000</span>
						<span class="mt-0.5 text-2xs text-gray-500">تـمـنـ</span>
					</div>
				</li>
				<hr class="border-gray-100">
				<li class="flex items-center justify-between">
					<span>جمع کل</span>
					<div class="flex items-center gap-1">
						<span class="font-bold">200,000</span>
						<span class="mt-0.5 text-2xs text-gray-500">تـمـنـ</span>
					</div>
				</li>
			</ul>
	
			<Checkbox class="text-sm" name="use-wallet">استفاده از کیف پول</Checkbox>
			<FieldNumberWithBtnInside wrapperClass="-mt-4" btnText="اعمال تخفیف" placeholder="کد تخفیف" />

			<ol class="grid gap-2 xs:grid-cols-2 xs:gap-4 xl:grid-cols-1 xl:gap-2">
				<li class="block w-full choose-payment-gateway">
					<input class="hidden" type="radio" id="zarinpal" name="payment-gateway" value="zarinpal" checked>
					<label class="flex items-center gap-2 mb-0 p-2 border-2 border-gray-200 rounded duration-100 ease-in-out cursor-pointer hover:border-brand hover:border-opacity-80" for="zarinpal">
						<img class="rounded w-12" src="/img/payments/ZarinPal.png" alt loading="lazy">
						<div class="text-sm text-gray-600">
							<h6 class="font-bold">ZarinPal</h6>
							<p class="mt-1 leading-3 text-2xs text-gray-500">پرداخت به وسیله کلیه کارت‌های عضو شبکه شتاب</p>
						</div>
					</label>
				</li>
				<li class="block w-full choose-payment-gateway">
					<input class="hidden" type="radio" id="payir" name="payment-gateway" value="payir">
					<label class="flex items-center gap-2 mb-0 p-2 border-2 border-gray-200 rounded duration-100 ease-in-out cursor-pointer hover:border-brand hover:border-opacity-80" for="payir">
						<img class="rounded w-12" src="/img/payments/PayIR.png" alt loading="lazy">
						<div class="text-sm text-gray-600">
							<h6 class="font-bold">PayIR</h6>
							<p class="mt-1 leading-3 text-2xs text-gray-500">پرداخت به وسیله کلیه کارت‌های عضو شبکه شتاب</p>
						</div>
					</label>
				</li>
			</ol>
			
			<div class="-mt-4">
				<button class="btn btn--brand btn--submit w-full" disabled={!$isLoggedIn} type="submit">ادامه تسویه حساب</button>
				{#if !$isLoggedIn}
					<p class="text-xs mt-2 text-red-400">برای ادامه فراید خرید باید ابتدا یک حساب کاربری ایجاد کنید.</p>
				{/if}
			</div>

		</svelte:fragment>
	</Layout>

{:else}

	<h1>سبد خرید خالی است.</h1>

{/if}

<style lang="postcss">
	.choose-payment-gateway input:checked + label {
		@apply border-brand border-opacity-80;
	}
	.choose-payment-gateway input:checked + label h6,
	.choose-payment-gateway input:checked + label p {
		@apply text-brand;
	}
</style>
