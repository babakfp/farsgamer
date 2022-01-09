<div class="grid gap-4 xl:grid-cols-12 xl:items-start xl:gap-8">

  <!-- Dashbaord Main Content -->
  <div class="xl:col-start-1 xl:col-end-9 2xl:col-end-10 xl:row-span-full overflow-hidden">
    
    <div class="cart-nav cart-nav--second-active overflow-x-auto">
      
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

    <div class="p-4 lg:p-6 bg-white rounded-2xl">

      <!-- Form -->
      <form class="grid gap-8 md:grid-cols-2" action="/" method="post">

        <div>
          <label for="firstname">نام</label>
          <input class="text-field" type="text" name="firstname" id="firstname" placeholder="نام">
        </div>
        
        <div>
          <label for="lastname">نام خانوادگی</label>
          <input class="text-field" type="text" name="lastname" id="lastname" placeholder="نام خانوادگی">
        </div>
        
        <div>
          <label for="phone-number">شماره همراه</label>
          <input class="text-field" type="tel" name="phone-number" id="phone-number" placeholder="شماره همراه">
        </div>
        
        <div>
          <label for="email">ایمیل</label>
          <input class="text-field" type="email" name="email" id="email" placeholder="ایمیل">
        </div>
  
        <div class="col-span-full">
          <label for="description">توضیحات بیشتر (اختیاری)</label>
          <textarea class="text-field h-auto" name="description" id="description" cols="30" rows="4" placeholder="یاداشت های مربوط به سفارش شما"></textarea>
        </div>
        
      </form>

      <!-- Boxes -->
      <div class="grid grid-cols-2 gap-2 mt-4 justify-center bg-brand bg-opacity-10 p-4 rounded-2xl sm:grid-cols-4">
        <div class="text-brand text-center">
          <i class="icon-lock w-12 h-12 flex items-center justify-center mx-auto text-3xl mb-2"></i>
          <p class="font-medium leading-5 text-sm">حفظ اطلاعات</p>
        </div>
        <div class="text-brand text-center">
          <i class="icon-support w-12 h-12 flex items-center justify-center mx-auto text-3xl mb-2"></i>
          <p class="font-medium leading-5 text-sm">پشتی بانی 24 ساعته</p>
        </div>
        <div class="text-brand text-center">
          <i class="icon-ticket w-12 h-12 flex items-center justify-center mx-auto text-3xl mb-2"></i>
          <p class="font-medium leading-5 text-sm">ضمانت پرداخت</p>
        </div>
        <div class="text-brand text-center">
          <i class="icon-bigclock w-12 h-12 flex items-center justify-center mx-auto text-3xl mb-2"></i>
          <p class="font-medium leading-5 text-sm">ثبت سفارش فوری</p>
        </div>
      </div>
    
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
  
      <!-- products in Cart -->
      <ul class="grid gap-2 text-sm">
        <li class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <img class="rounded-xl w-14" src="/images/product-grid.png">
            <p class="font-semibold">بتل پس چپتر 2 سیزن 5</p>
          </div>
          <a href="" class="text-red hover:text-opacity-70 focus:text-opacity-70 transition-colors duration-200">
            <i class="icon-cancel"></i>
          </a>
        </li>
        <li class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <img class="rounded-xl w-14" src="/images/product-grid.png">
            <p class="font-semibold">گیف کارد</p>
          </div>
          <a href="" class="text-red hover:text-opacity-70 focus:text-opacity-70 transition-colors duration-200">
            <i class="icon-cancel"></i>
          </a>
        </li>
      </ul>
  
      <hr class="border-gray-200 my-4">
      <h2 class="font-semibold text-gray-500 mb-2">جمع کل سبد خرید</h2>

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
  
      <!-- Gateways -->
      <label class="bg-gray-50 rounded-xl mt-4 flex items-center gap-2 p-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200" for="zarinpal">
        <input type="radio" id="zarinpal" value="zarinpal" name="payment-gateway">
        <img class="rounded-xl w-16" src="/images/zarinpal-sm.png">
        <div class="grid">
          <p class="font-semibold">پرداخت امن زرین‌پال</p>
          <p class="text-xs font-medium">پرداخت به وسیله کلیه کارت های عضو شبکه شتاب</p>
        </div>
      </label>
      <label class="bg-gray-50 rounded-xl mt-4 flex items-center gap-2 p-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200" for="payir">
        <input type="radio" id="payir" value="payir" name="payment-gateway">
        <img class="rounded-xl w-16" src="/images/payir.png">
        <div class="grid">
          <p class="font-semibold">پرداخت امن زرین‌پال</p>
          <p class="text-xs font-medium">پرداخت به وسیله کلیه کارت های عضو شبکه شتاب</p>
        </div>
      </label>

      <!--  -->
      <button id="checkout-nav__next" class="btn form-submit btn-brand btn-2xl w-full mt-4" type="submit">ادامه تسویه حساب</button>
    </div>
  </div>

  
</div>