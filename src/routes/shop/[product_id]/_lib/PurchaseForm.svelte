<script>
	import Input from '$lib/Input.svelte'
	import Checkbox from '$lib/Checkbox.svelte'
	import Radiobox from '$lib/Radiobox.svelte'
</script>

<form class="grid gap-8 mt-4 p-6 bg-white rounded text-sm xl:mt-8">

  <div>
    <label class="font-bold mb-4" for="category">اکانتی که وارد میکنید کدام دسته می‌باشد؟</label>
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
			labelClass="font-bold"
			class="dir-ltr" type="email" name="email" autocomplete="email"
		/>
		<Input
			label="رمز اکانت"
			labelClass="font-bold"
			class="dir-ltr" type="password" name="password" autocomplete="password"
		/>
	</div>

	<Checkbox name="fast-delivery">آیا میخواهید سفارش شما زیر یک ساعت انجام شود؟</Checkbox>

  <!-- Price -->
  <div class="mb-2 flex items-center justify-between">
    
		<div class="flex items-center gap-2">
      <label for="quantity">تعداد</label>
			<input class="input" type="number" name="quantity" id="quantity" min="1" max="10" value="1">
    </div>

    <div class="grid justify-end text-left">
      <span class="text-xs mb-1">مبلغ پرداختی</span>
      <!-- No discount -->
      <!-- <div class="flex items-center gap-1">
        <span class="font-bold text-2xl tracking-tighter">۱۵۰,000</span>
        <span>تــمــنـــ</span>
      </div> -->
      <!-- With discount -->
      <div class="flex gap-1.5 justify-center">
        <div class="font-bold leading-4 grid">
          <!-- Price before discount -->
          <p class="font-bold text-2xl tracking-tighter">۵۰۰,۰۰۰</p>
          <!-- Price after discount -->
          <p class="line-through text-gray-400 flex items-center justify-end">۳۰۰,۰۰۰</p>
        </div>
    
        <div class="grid gap-1">
          <!-- Price currency -->
          <p class="text-sm">تــمــنـــ</p>
          <!-- Discount precedence -->
          <div class="bg-red text-white rounded-full py-0.5 px-2 text-xs flex items-center">۲۰%</div>
        </div>
      </div>
    </div>
		
  </div>

	<button class="btn btn--submit w-full sm:max-w-60 btn--brand font-medium text-base" type="submit">افزودن به سبد خرید</button>

</form>