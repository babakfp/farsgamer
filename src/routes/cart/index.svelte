<script>
	import CartItems from './lib/CartItems.svelte'
</script>

<div class="grid gap-4 xl:grid-cols-12 xl:items-start">

  <!-- Dashbaord Main Content -->
  <div class="xl:col-start-1 xl:col-end-9 2xl:col-end-10 xl:row-span-full overflow-hidden">


    <!-- 
      Hi back-end developer.
      You don't need to any work for this part because this part is handled by a class name.
      On each page, I added a class to the main tag to change the style of the element.
      [cart-nav--first-active, cart-nav--second-active, cart-nav--third-active]
      You may don't want to duplicate the code, so you can add those classes dynamically to the main element.
     -->
    <div class="cart-nav cart-nav--first-active overflow-x-auto"><!-- This is the Main element -->
      
      <!-- Cart -->
      <div class="cart-nav__item">
        <div class="cart-nav__item-circle"></div>
        <div class="cart-nav__item-info">
          <i class="icon-basket"></i>
          <span>سبد خرید</span>
        </div>
      </div>

      <!-- Order Specifications -->
      <div class="cart-nav__item">
        <div class="cart-nav__item-circle"></div>
        <div class="cart-nav__item-info">
          <i class="icon-user"></i>
          <span>مشخصات سفارش</span>
        </div>
      </div>

      <!-- Order Details -->
      <div class="cart-nav__item">
        <div class="cart-nav__item-circle"></div>
        <div class="cart-nav__item-info">
          <i class="icon-bag"></i>
          <span>جزئیات سفارش</span>
        </div>
      </div>

    </div>


    <!-- Product's in the Cart -->
    <div class="p-4 lg:p-6 bg-white rounded-2xl">
      
			<!-- Empty cart. -->
			<!-- <div class="grid gap-4 py-10 justify-center justify-items-center py-4">
				<img class="w-60" src="/svg/empty-cart.svg" alt="Empty cart">
				<p class="font-bold md:text-md lg:text-2xl text-red">سبد خرید خالی است</p>
			</div> -->

      <CartItems />

    </div>
  </div>

  <!-- Dashbaord Menu -->
  <div class="xl:col-start-9 xl:col-end-13 2xl:col-start-10 xl:row-span-full">

    <div class="p-4 lg:p-6 bg-white rounded-2xl">
      <div class="flex items-center gap-4">

        <!-- If: User is logged in -->
        <div class="w-12 h-12 relative mt-2">
          <img class="w-16 h-16 absolute inset-0 top-auto" src="/svg/avatar.svg" alt="آواتار">
        </div>
        <p class="font-bold text-lg capitalize">power asghar</p>
                
        <!-- else: User is not logged in -->
				<!--
					<img class="rounded-xl w-14" src="/images/guest-user.jpg">
					<a class="btn font-semibold h-14 w-full bg-gradient-to-l from-brand to-yellow text-white border-0 transition-colors duration-200 hover:from-yellow hover:to-brand" href="signup">ورود <span>/</span> عضویت</a>
				-->

      </div>
      <hr class="border-gray-200 my-4">
  
      <h2 class="font-semibold text-gray-500 mb-2">جمع کل سبد خرید</h2>

      <!--
        <div class="bg-light-green font-medium flex items-center justify-center gap-2 p-2 rounded-2xl mb-2">
          <i class="icon-check-square"></i>
          <p class="text-sm">کد تخفیف با موفقیت اعمال شد</p>
        </div>
      -->
      
      <!--
        <div class="bg-pink font-medium flex items-center justify-center gap-2 p-2 rounded-2xl mb-2">
          <i class="icon-exclamation-square"></i>
          <p class="text-sm">کد تخفیف اشتباه هست یا قبلا استفاده شده</p>
        </div>
      -->
  
      <!-- Info -->
      <div class="bg-gray-50 rounded-xl mt-2 text-sm">
        <div class="flex items-center justify-between p-2">
          <p>جمع جزء</p>
          <div class="flex items-center gap-1">
            <p class="font-semibold">200,000</p>
            <p>تومان</p>
          </div>
        </div>
        <div class="flex items-center justify-between p-2">
          <p>تخفیف</p>
          <div class="flex items-center gap-1">
            <p class="font-semibold">200,000</p>
            <p>تومان</p>
          </div>
        </div>
        <div class="flex items-center justify-between p-2 border-t border-gray-200">
          <p>جمع کل</p>
          <div class="flex items-center gap-1">
            <p class="font-semibold">200,000</p>
            <p>تومان</p>
          </div>
        </div>
      </div>

      <!-- Show this element if user was logged in -->
      <div class="checkbox checkbox--brand mt-4">
        <input
          type="checkbox"
          name="rememberme"
          id="rememberme"
          class="checkbox__field"
        >
        <label for="rememberme" class="checkbox__label text-sm">استفاده از کیف پول</label>
      </div>
  
      <div class="relative mt-4">
        <input class="text-field text-sm" type="text" placeholder="کد تخفیف">
        <a class="btn btn-brand absolute top-0 bottom-0 left-0 text-sm" href="">تخفیف بده</a>
      </div>
  
      <!--  -->
      <button id="checkout-nav__next" class="btn form-submit btn-brand btn-2xl w-full mt-4" type="submit">ادامه تسویه حساب</button>
    </div>
  </div>

</div>