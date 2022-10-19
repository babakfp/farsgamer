<script>
	import { writable } from 'svelte/store'
	import { cartItems } from '$store/cart.js'
	import { Form, Input, Checkbox, RadioboxWrapper, RadioButton } from '$components/Form'
	export let data
	let fastDelivery
	let accountCategory = writable(data.product.accountCategories[0].title)
	let accountEmail = ''
	let accountPassword = ''

	$: cartData = {
		id: data.product.id,
		title: data.product.title,
		thumb: data.product.thumb,
		price: data.product.price.afterDiscount || data.product.price.beforeDiscount,
		account: {
			category: $accountCategory,
			email: accountEmail,
			password: accountPassword,
		},
		fastDelivery,
	}

	$: itemAlreadyInCart = $cartItems.filter(item => item.id === data.product.id).length > 0
</script>

<Form class="grid gap-8 mt-5 p-6 bg-white rounded md:mt-8">

  <div>
    <label class="mb-3" for="category">اکانتی که وارد میکنید کدام دسته می‌باشد؟</label>
		<RadioboxWrapper class="flex flex-wrap gap-2 lg:flex lg:justify-start"
			name="account-categories" bind:selected={accountCategory}
		>
			{#each data.product.accountCategories as category (category.id)}
				<RadioButton value={category.title}>
					{category.title}
				</RadioButton>
			{/each}
		</RadioboxWrapper>
  </div>

	<div class="grid gap-4 sm:flex">
		<Input bind:value={accountEmail} type="email" name="account-email" label="ایمیل اکانت" />
		<Input bind:value={accountPassword} type="password" name="account-password" label="رمز اکانت" />
	</div>

	<Checkbox name="fast-delivery" bind:checked={fastDelivery}>
		<span>انجام سریع سفارش؟</span>
		<span class="text-sm mr-1">(<span class="font-bold">50,000</span> <span class="text-xs">تومان</span>)</span>
	</Checkbox>

	<div class="grid gap-8 xs:flex xs:flex-row-reverse xs:items-end xs:justify-between">
		<div class="min-w-50">
			<div class="flex items-center justify-between gap-8">
				<span class="pr-2 pb-1 text-gray-400 text-xs">مبلغ پرداختی</span>
				<span class="-mb-2 pt-2 pb-4 px-6 bg-red-400 rounded-t text-white text-xs font-bold">٪۲۰</span>
			</div>
			<div class="relative flex items-center justify-end gap-1 py-3 px-8 bg-gray-50 rounded shadow-b-sm text-lg">
				{#if data.product.price.afterDiscount}
					<span class="line-through text-gray-400 text-xs">
						{data.product.price.beforeDiscount}
					</span>
				{/if}
				<span class="font-medium">
					{data.product.price.afterDiscount || data.product.price.beforeDiscount}
				</span>
				<span class="text-xs">تومان</span>
			</div>
		</div>
	
		{#if itemAlreadyInCart}
			<a class="btn btn--submit w-full sm:max-w-60 btn--brand font-medium text-base" href="/cart">
				مشاهده سبد خرید
			</a>
		{:else}
			<button class="btn btn--submit w-full sm:max-w-60 btn--brand font-medium text-base" type="submit"
				on:click={()=> cartItems.update(currentValue => [...currentValue, cartData])}
			>افزودن به سبد خرید</button>
		{/if}
	</div>

</Form>
