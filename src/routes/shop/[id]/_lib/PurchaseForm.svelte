<script>
	import Input from '$lib/Input.svelte'
	import Checkbox from '$lib/Checkbox.svelte'
	import Radiobox from '$lib/Radiobox.svelte'
	import FieldNumber from '$lib/FieldNumber.svelte'
</script>

<form class="grid gap-8 mt-5 p-6 bg-white rounded md:mt-8">

  <div>
    <label class="mb-3" for="category">اکانتی که وارد میکنید کدام دسته می‌باشد؟</label>
    <div class="flex flex-wrap gap-4 lg:flex lg:justify-start">
			<Radiobox name="category" title="Playstation" />
			<Radiobox name="category" title="EpicGames" />
			<Radiobox name="category" title="XBox" />
			<Radiobox name="category" title="Nitendo" />
    </div>
  </div>

	<div class="grid gap-4 sm:flex">
		<Input
			label="ایمیل اکانت"
			class="dir-ltr" type="email" name="email" autocomplete="email"
		/>
		<Input
			label="رمز اکانت"
			class="dir-ltr" type="password" name="password" autocomplete="password"
		/>
	</div>

	<Checkbox name="fast-delivery">آیا میخواهید سفارش شما زیر یک ساعت انجام شود؟ <span class="text-sm">(<span class="font-bold">50</span> <span class="text-xs">هزار تومان</span>)</span></Checkbox>

  <!-- Price -->
  <div class="flex items-center justify-between gap-8">
    
		<FieldNumber
			label="تعداد"
			value="1" min={1} max={10} name="quantity"
			wrapperClass="flex items-center gap-4"
			boxedSizeField={true}
		/>

		<div>
			<div class="flex items-center justify-between">
				<span class="pr-2 text-gray-400 text-xs">مبلغ پرداختی</span>
				<span class="-mb-2 pt-3 pb-4 px-6 bg-red-400 rounded-t text-white text-xs">۲۰٪</span>
			</div>
			<div class="relative flex items-center justify-end gap-2 py-3 px-8 bg-gray-50 rounded shadow-b-sm text-lg">
				<span class="font-montserrat line-through decoration-red-700 opacity-50">200</span>
				<span class="font-montserrat font-medium">100</span>
				<span class="mt-1 text-xs">تـمـنـ</span>
			</div>
		</div>

  </div>

	<button class="btn btn--submit w-full sm:max-w-60 btn--brand font-medium text-base" type="submit">افزودن به سبد خرید</button>

</form>