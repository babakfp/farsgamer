<script>
	import { isLoggedIn } from '$store/global.js'
	import { Checkbox, Coupon } from '$components/Form'
	import { cartItems, walletBalance } from '$store/cart.js'
	import CartItems from './_lib/CartItems.svelte'
	import Layout from './_lib/Layout.svelte'
	import CartEmpty from './_lib/CartEmpty.svelte'
	import PriceItem from './_lib/PriceItem.svelte'
	import { numberToPrice, priceToNumber } from '$utilities/helpers-price.js'

	let useWallet = false
	let subtotal = 0
	$cartItems.forEach(item => {
		subtotal += priceToNumber(item.price)
	})
	let total = subtotal
	$: if (useWallet) {
		if (subtotal - priceToNumber($walletBalance) <= 0) {
			total = 0
		} else {
			total = subtotal - priceToNumber($walletBalance)
		}
	}
	
	console.log(subtotal - priceToNumber($walletBalance));
</script>

{#if $cartItems.length > 0}

	<Layout>
		<svelte:fragment slot="main">
			<CartItems />
		</svelte:fragment>
		
		<svelte:fragment slot="sidebar">
			{#if !$isLoggedIn}
				<a class="btn btn--brand btn--submit w-full" href="/login">ورود به حساب</a>
			{/if}
		
			<ul>
				<PriceItem title="جمع جزء" price="200,000" />
				<PriceItem title="تخفیف" price="200,000" negative={true} />
				{#if useWallet}
					<PriceItem title="استفاده از کیف پول" price={$walletBalance} negative={true} />
				{/if}
				<PriceItem title="جمع کل" price={total} />
			</ul>
	
			<Checkbox class="text-sm" name="use-wallet" bind:checked={useWallet}>استفاده از کیف پول <span class="text-xs">({$walletBalance} تومان)</span></Checkbox>
			<Coupon classContainer="-mt-4" btnText="اعمال تخفیف" placeholder="کد تخفیف" />

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
				<button class="btn btn--brand btn--submit w-full {!$isLoggedIn && 'cursor-not-allowed'}" disabled={!$isLoggedIn} type="submit">ادامه تسویه حساب</button>
				{#if !$isLoggedIn}
					<p class="text-xs mt-2 text-red-400">برای ادامه فراید خرید باید ابتدا یک حساب کاربری ایجاد کنید.</p>
				{/if}
			</div>

		</svelte:fragment>
	</Layout>

{:else}

	<CartEmpty />

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
