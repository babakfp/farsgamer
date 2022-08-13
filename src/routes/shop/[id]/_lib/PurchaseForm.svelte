<script>
	import { cartItems } from '$store/cart.js'
	import Input from '$components/Input.svelte'
	import { Checkbox } from '$components/Form'
	import { Radiobox } from '$components/Form'
	import FieldNumber from '$components/FieldNumber.svelte'
	export let product
	let fastDelivery
	let accountCategory = product.accountCategories[0].title
	let accountEmail = ''
	let accountPassword = ''

	$: cartData = {
		id: product.id,
		title: product.title,
		src: product.images[0],
		price: product.price,
		account: {
			category: accountCategory,
			email: accountEmail,
			password: accountPassword,
		},
		fastDelivery,
	}

	$: itemAlreadyInCart = $cartItems.filter(item => item.id === product.id).length > 0
</script>

<form class="grid gap-8 mt-5 p-6 bg-white rounded md:mt-8" on:submit|preventDefault>

  <div>
    <label class="mb-3" for="category">اکانتی که وارد میکنید کدام دسته می‌باشد؟</label>
    <div class="flex flex-wrap gap-x-8 gap-y-2 lg:flex lg:justify-start">
			{#each product.accountCategories as category (category.id)}
				<Radiobox contentClass="text-sm" name="account-categories" value={category.title} bind:selectedValue={accountCategory}>
					{category.title}
				</Radiobox>
			{/each}
    </div>
  </div>

	<div class="grid gap-4 sm:flex">
		<Input
			label="ایمیل اکانت"
			class="dir-ltr" type="email" name="email" autocomplete="email"
			bind:value={accountEmail}
		/>
		<Input
			label="رمز اکانت"
			class="dir-ltr" type="password" name="password" autocomplete="password"
			bind:value={accountPassword}
		/>
	</div>

	<Checkbox name="fast-delivery" bind:checked={fastDelivery}>
		<span>آیا میخواهید سفارش شما زیر یک ساعت انجام شود؟</span>
		<span class="text-sm mr-1">(<span class="font-bold">50,000</span> <span class="text-xs">تومان</span>)</span>
	</Checkbox>

  <!-- Price -->
	<div>
		<div class="flex items-center justify-between">
			<span class="pr-2 text-gray-400 text-sm">مبلغ پرداختی</span>
			<span class="-mb-2 pt-2 pb-4 px-6 bg-red-400 rounded-t text-white text-xs font-bold">٪۲۰</span>
		</div>
		<div class="relative flex items-center justify-end gap-2 py-3 px-8 bg-gray-50 rounded shadow-b-sm text-lg">
			<span class="font-medium line-through decoration-red-700 opacity-50">200</span>
			<span class="font-medium">100</span>
			<span class="mt-1 text-xs">تومان</span>
		</div>
	</div>

	{#if itemAlreadyInCart}
		<a class="btn btn--submit w-full sm:max-w-60 btn--brand font-medium text-base" href="/cart">
			مشاهده سبد خرید
		</a>
	{:else}
		<button class="btn btn--submit w-full sm:max-w-60 btn--brand font-medium text-base" type="submit"
			on:click={() => cartItems.update(currentValue => [...currentValue, cartData])}
		>افزودن به سبد خرید</button>
	{/if}

</form>
