<form id="spp-purchase-form" class="text-center lg:text-right rounded-2xl border border-gray-200 p-6 mt-4">

  <div>
    <label class="mb-2">اکانتی که وارد میکنید کدام دسته می‌باشد؟</label>
    <div class="flex flex-wrap justify-center gap-2 lg:flex lg:justify-start">
      <label class="radiobox account-category-btn" for="playstation">Playstation<input class="account-category-btn__field" type="radio" name="account-category" value="playstation"></label>
      <label class="radiobox account-category-btn" for="epicgames">Epic Games<input class="account-category-btn__field" type="radio" name="account-category" value="epicgames"></label>
      <label class="radiobox account-category-btn" for="xbox">XBox<input class="account-category-btn__field" type="radio" name="account-category" value="xbox"></label>
      <label class="radiobox account-category-btn" for="nitendo">Nitendo<input class="account-category-btn__field" type="radio" name="account-category" value="nitendo"></label>
      <label class="radiobox account-category-btn" for="facebook">Facebook<input class="account-category-btn__field" type="radio" name="account-category" value="facebook"></label>
    </div>
  </div>


  <div id="spp-purchase-form__field-wrapper" class="hidden grid gap-4 mt-8">

    <div class="grid gap-4 lg:grid-cols-2">

        <!-- Account Email -->
      <div>
        <label class="font-semibold" for="account-email">آدرس ایمیل اکانت</label>
        <input
          type="email"
          name="account-email"
          id="account-email"
          placeholder="آدرس ایمیل"
          class="text-field"
          autocomplete="email"
        >
      </div>

      <!-- Account Password -->
      <div>
        <label class="font-semibold" for="account-password">رمز اکانت</label>
        <input
          type="password"
          name="account-password"
          id="account-password"
          placeholder="رمز"
          class="text-field"
          autocomplete="current-password"
        >
      </div>

      <!-- Account Email -->
      <div class="col-span-2">
        <label class="font-semibold" for="account-email">ایمیل</label>
        <input
          type="email"
          name="account-email"
          id="account-email"
          placeholder="آدرس ایمیل"
          class="text-field"
          autocomplete="email"
        >
      </div>

    <!--
    <div>
      <label class="font-semibold" for="account-password">رمز اکانت</label>
      <div class="password-field">
        <input
          type="password"
          name="account-password"
          id="account-password"
          placeholder="رمز"
          class="text-field"
          autocomplete="current-password"
        >
        <i class="password-field__toggle"></i>
      </div>
    </div>
    -->

    </div>

    <!-- Fast Delivery Checkbox -->
    <!-- <div class="checkbox checkbox--brand">
      <input
        type="checkbox"
        name="fast-delivery"
        id="fast-delivery"
        class="checkbox__field"
      >
      <label for="fast-delivery" class="checkbox__label text-sm">آیا میخواهید سفارش شما زیر یک ساعت انجام شود؟</label>
    </div> -->

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
      <div class="relative">
				<input class="purchase-form-quantity__field text-field w-20" type="number" name="quantity" id="quantity" min="1" max="10" value="1">
				<button class="purchase-form-quantity__plus w-8 absolute left-0 top-0 pt-1" type="button">+</button>
				<button class="purchase-form-quantity__negative w-8 absolute left-0 bottom-0 pb-0.5" type="button">-</button>
			</div>
    </div>
    <div class="grid justify-end text-left">
      <span class="text-xs mb-1">مبلغ پرداختی</span>
      <!-- No discount -->
      <!-- <div class="flex items-center gap-1">
        <span class="font-bold text-2xl tracking-tighter">۱۵۰,000</span>
        <span>تومان</span>
      </div> -->
      <!-- With discount -->
      <div class="flex gap-1.5 justify-center">
        <div class="font-semibold leading-4 grid">
          <!-- Price before discount -->
          <p class="font-bold text-2xl tracking-tighter">۵۰۰,۰۰۰</p>
          <!-- Price after discount -->
          <p class="line-through text-gray2-700 flex items-center justify-end">۳۰۰,۰۰۰</p>
        </div>
    
        <div class="grid gap-1">
          <!-- Price currency -->
          <p class="text-sm">تومان</p>
          <!-- Discount precedence -->
          <div class="bg-red text-white rounded-full py-0.5 px-2 text-xs flex items-center">۲۰%</div>
        </div>
      </div>
    </div>
  </div>

  <div class="lg:flex lg:items-end lg:justify-between">

    <!-- :| Some unnesesery Boxes -->
    <div class="grid my-4 lg:my-0 grid-cols-2 xss:grid-cols-4 gap-2 justify-center font-light text-xs leading-4 lg:mb-1">
      <div class="text-brand text-center">
        <i class="icon-lock w-12 h-8 flex items-center justify-center mx-auto text-lg"></i>
        <p>حفظ اطلاعات</p>
      </div>
      <div class="text-brand text-center">
        <i class="icon-support w-12 h-8 flex items-center justify-center mx-auto text-lg"></i>
        <p>پشتی بانی 24 ساعته</p>
      </div>
      <div class="text-brand text-center">
        <i class="icon-ticket w-12 h-8 flex items-center justify-center mx-auto text-lg"></i>
        <p>ضمانت پرداخت</p>
      </div>
      <div class="text-brand text-center">
        <i class="icon-bigclock w-12 h-8 flex items-center justify-center mx-auto text-lg"></i>
        <p>ثبت سفارش فوری</p>
      </div>
    </div>

    <!-- Submit Button -->
    <button class="btn btn-2xl w-full sm:max-w-60 form-submit btn-brand font-medium text-base" type="submit">افزودن به سبد خرید</button>

  </div>

</form>