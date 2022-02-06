<script>
	import Checkbox from '$lib/Checkbox.svelte'
</script>

<form class="mt-4 p-6 bg-white rounded text-sm xl:mt-8">

  <div>
    <label class="mb-2">اکانتی که وارد میکنید کدام دسته می‌باشد؟</label>
    <div class="flex flex-wrap gap-2 lg:flex lg:justify-start">
      <label class="radiobox account-category-btn" for="playstation">Playstation<input class="account-category-btn__field" type="radio" name="account-category" value="playstation"></label>
      <label class="radiobox account-category-btn" for="epicgames">Epic Games<input class="account-category-btn__field" type="radio" name="account-category" value="epicgames"></label>
      <label class="radiobox account-category-btn" for="xbox">XBox<input class="account-category-btn__field" type="radio" name="account-category" value="xbox"></label>
      <label class="radiobox account-category-btn" for="nitendo">Nitendo<input class="account-category-btn__field" type="radio" name="account-category" value="nitendo"></label>
    </div>
  </div>

  <div id="spp-purchase-form__field-wrapper" class="grid gap-4 mt-8">

    <div class="grid gap-4 lg:grid-cols-2">

        <!-- Account Email -->
      <div>
        <label class="font-bold" for="account-email">آدرس ایمیل اکانت</label>
        <input
          type="email"
          name="account-email"
          id="account-email"
          placeholder="آدرس ایمیل"
          class="input"
          autocomplete="email"
        >
      </div>

      <!-- Account Password -->
      <div>
        <label class="font-bold" for="account-password">رمز اکانت</label>
        <input
          type="password"
          name="account-password"
          id="account-password"
          placeholder="رمز"
          class="input"
          autocomplete="current-password"
        >
      </div>

      <!-- Account Email -->
      <div class="col-span-2">
        <label class="font-bold" for="account-email">ایمیل</label>
        <input
          type="email"
          name="account-email"
          id="account-email"
          placeholder="آدرس ایمیل"
          class="input"
          autocomplete="email"
        >
      </div>

    </div>

		<Checkbox name="fast-delivery">آیا میخواهید سفارش شما زیر یک ساعت انجام شود؟</Checkbox>

    <!-- This is the new UI for the component abov -->
    <div class="flex items-center gap-4 flex-wrap">
      <p>آیا میخواهید سفارش شما زیر یک ساعت انجام شود؟</p>
      <div class="flex items-center gap-4">
        <label for="fast-delivery-true" class="flex items-center gap-1 cursor-pointer mb-0">
          <input type="radio" name="fast-delivery" value="true" id="fast-delivery-true">
          <p>بلی</p>
        </label>
        <label for="fast-delivery-false" class="flex items-center gap-1 cursor-pointer mb-0">
          <input type="radio" name="fast-delivery" value="false" id="fast-delivery-false" checked>
          <p>خیر</p>
        </label>
      </div>
    </div>

  </div>

  <!-- Price -->
  <div class="mt-8 mb-2 flex items-center justify-between">
    
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