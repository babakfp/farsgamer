<script>
	import { isLoggedIn } from '$store/global.js'
	import { Checkbox, Coupon } from '$components/Form'
	import { cartItems, walletBalance, discounts, cartDiscountInUse } from '$store/cart.js'
	import CartItems from './_lib/CartItems.svelte'
	import Layout from './_lib/Layout.svelte'
	import CartEmpty from './_lib/CartEmpty.svelte'
	import PriceItem from './_lib/PriceItem.svelte'
	import PaymentGateway from './_lib/PaymentGateway.svelte'
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
	
	let discountFieldValue = ''
	let discountErrorMessage = ''
	let discountSuccessMessage = ''
	const applyCoupon =_=> {
		const discount = $discounts.filter(dis => dis.code === discountFieldValue)[0]
		if (discount) {
			discountSuccessMessage = 'کد تخفیف با موفقیت اعمال شد.'
			discountErrorMessage = ''
		} else {
			discountErrorMessage = 'کد تخفیف معتبر نمی‌باشد!'
			discountSuccessMessage = ''
		}
	}

	$: if (discountFieldValue) {
		discountErrorMessage = ''
		discountSuccessMessage = ''
	}
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
			<Coupon classContainer="-mt-4" btnText="اعمال تخفیف" placeholder="کد تخفیف" bind:value={discountFieldValue} on:submit={applyCoupon} errorMessage={discountErrorMessage} successMessage={discountSuccessMessage}>
				<svelte:fragment slot="description">
					کد تخفیف <code>25BOFF</code> به مناسبت اولین کد تخفیف خود وارد کنید.
				</svelte:fragment>
			</Coupon>

			<ol class="grid gap-2 xs:grid-cols-2 xs:gap-4 xl:grid-cols-1 xl:gap-2">
				<li>
					<PaymentGateway
						title="ZarinPal"
						description="پرداخت به وسیله کلیه کارت‌های عضو شبکه شتاب"
						src="/img/payments/ZarinPal.png"
						id="zarinpal"
						value="zarinpal"
						checked={true}
					/>
				</li>
				<li>
					<PaymentGateway
						title="PayIR"
						description="پرداخت به وسیله کلیه کارت‌های عضو شبکه شتاب"
						src="/img/payments/PayIR.png"
						id="payir"
						value="payir"
					/>
				</li>
			</ol>
			
			<div class="-mt-4">
				<button class="btn btn--brand btn--submit w-full {!$isLoggedIn && 'cursor-not-allowed'}" disabled={!$isLoggedIn} type="submit">ادامه تسویه حساب</button>
				{#if !$isLoggedIn}
					<p class="text-xs mt-2 text-red-400">برای ادامه فراید خرید باید وارد حساب خود شوید.</p>
				{/if}
			</div>

		</svelte:fragment>
	</Layout>

{:else}

	<CartEmpty />

{/if}
