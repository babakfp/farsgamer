<div class="grid gap-4 xl:grid-cols-12 xl:items-start xl:gap-8">

  <!-- Dashbaord Main Content -->
  <div class="xl:col-start-1 xl:col-end-9 2xl:col-end-10 xl:row-span-full overflow-hidden">
    
    <div class="cart-nav cart-nav--third-active overflow-x-auto">
      
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
      
      <h1 class="font-semibold text-lg mb-4">جزئیات سفارش</h1>

      <!-- Success Message -->
      <!--
        <div class="bg-light-green font-medium flex items-center justify-center gap-2 p-2 rounded-2xl mb-4">
          <i class="icon-check-square"></i>
          <p class="text-sm">پرداخت با موفقیت انجام شد با تشکر از خرید شما</p>
        </div>
      -->

      <!-- Error Message -->
      <!--
        <div class="bg-pink font-medium flex flex-wrap items-center justify-center gap-y-2 gap-x-8 p-2 rounded-2xl mb-4">
          <div class="flex items-center gap-2">
            <i class="icon-exclamation-square"></i>
            <p class="text-sm">پرداخت شما ناموفق بود</p>
          </div>
          <a href="" class="btn btn-brand btn-outline btn-xs">دوباره تلاش کنید</a>
        </div>
      -->

      <div class="table-wrapper">
        <table>
          <thead class="mb-4 text-sm">
            <tr class="text-gray-500">
              <!-- 1 -->
              <th>محصول</th>
              <!-- 2 -->
              <th></th>
              <!-- 3 -->
              <th>تعداد</th>
              <!-- 4 -->
              <th>جمع جزء</th>
              <!-- 5 -->
              <th></th>
            </tr>
          </thead>
          <tbody>

            <!-- START Loop -->
            <tr class="h-2 last:h-0"></tr>
            <tr class="order-details__item border-0">

              <!-- 1 - Product Image -->
              <td class="bg-gray-50 rounded-r-2xl w-28 h-28">
                <img class="rounded-xl min-w-28 min-h-28" src="/images/product-grid.png">
              </td>

              <!-- 2 - Product Info -->
              <td class="bg-gray-50">
                <h3 class="font-semibold mb-2 text-sm min-w-24">بتل پس چپتر 2 سیزن 5</h3>
                <ul class="order-details__item__extra-content text-sm whitespace-nowrap">
                  <li class="flex">
                    <span>نوع اکانت: </span>
                    <span class="font-medium">اپیک گیمز</span>
                  </li>
                  <li class="flex">
                    <span>ایمیل: </span>
                    <span class="font-medium">mostafa.021g@gmail.com</span>
                  </li>
                  <li class="flex">
                    <span>رمز: </span>
                    <span class="font-medium">1234</span>
                  </li>
                  <li class="flex">
                    <span>مایل به دریافت سریع تر: </span>
                    <span class="font-medium">بلی</span>
                  </li>
                </ul>
              </td>

              <!-- 3 - Quantity -->
              <td class="bg-gray-50">
                <div class="bg-white rounded-2xl w-16 h-10 flex items-center justify-center">2</div>
              </td>

              <!-- 4 - Total Price -->
              <td class="bg-gray-50">
                <div class="flex items-center gap-1 whitespace-nowrap">
                  <p class="text-lg font-semibold">100,000</p>
                  <p class="text-sm">تومان</p>
                </div>
              </td>

              <!-- 5 - toggle -->
              <td class="bg-gray-50 rounded-l-2xl">
                <button class="order-details__item__toggle-content bg-brand hover:bg-opacity-100 bg-opacity-10 w-8 h-8 flex items-center justify-center group rounded-xl transition-colors duration-150 ease-in">
                  <i class="icon-angle-down text-brand group-hover:text-white"></i>
                </button>
              </td>

            </tr>
            <!-- END Loop -->

          </tbody>
        </table>
      </div>

      <hr class="border-gray-200 my-4">

      <ul class="space-y-2 text-sm">
        <li class="flex items-center justify-between">
          <p class="font-semibold">جمع کل سبد خرید</p>
          <div class="flex items-center gap-1 whitespace-nowrap">
            <p class="font-semibold">100,000</p>
            <p class="text-sm">تومان</p>
          </div>
        </li>
        <li class="flex items-center justify-between">
          <p class="font-semibold">تخفیف</p>
          <div class="flex items-center gap-1 whitespace-nowrap">
            <p class="font-semibold">100,000</p>
            <p class="text-sm">تومان</p>
          </div>
        </li>
        <li class="flex items-center justify-between">
          <p class="font-semibold">کیف پول</p>
          <div class="flex items-center gap-1 whitespace-nowrap">
            <p class="font-semibold">100,000</p>
            <p class="text-sm">تومان</p>
          </div>
        </li>
        <li class="flex items-center justify-between">
          <p class="font-semibold text-lg text-red">قیمت نهایی</p>
          <div class="flex items-center gap-1 whitespace-nowrap text-lg text-red">
            <p class="text-lg font-semibold">100,000</p>
            <p class="text-sm">تومان</p>
          </div>
        </li>
      </ul>
      
    </div>
  </div>

  <!-- Dashbaord Menu -->
  <div class="xl:col-start-9 xl:col-end-13 2xl:col-start-10 xl:row-span-full">

    <a class="p-4 lg:p-6 bg-white rounded-2xl flex items-center justify-center gap-2 mb-4 link-transition hover:text-brand-deep" href="/">
      <i class="icon-arrow-right-square"></i>
      <p>بازگشت به خانه</p>
    </a>

    <div class="p-4 lg:p-6 bg-white rounded-2xl">

      <!-- Logo -->
      <!-- <a href="/" class="flex items-center justify-center bg-gray-50 p-4 rounded-2xl">
        <img class="w-36" src="/images/logo.png" alt="لوگو">
      </a> -->

      <div class="bg-gray-50 text-brand border border-brand rounded-2xl text-center">
        <p class="px-3 py-2">زمان تحویل</p>
        <p class="px-3 py-2 font-medium border-t border-brand text-2xl">10:23:59:59</p>
      </div>

      <!-- Order Info -->
      <ul class="mt-4 space-y-2 text-base">
        <li class="flex items-center justify-between">
          <p class="text-gray-500 font-semibold">شماره سفارش</p>
          <p class="dir-ltr font-semibold"><span class="text-gray2-700">#</span><span class="font-isans-ed select-all">FFA-980317</span></p>
        </li>
        <li class="flex items-center justify-between">
          <p class="text-gray-500 font-semibold">تاریخ</p>
          <p class="font-semibold">1399, 25 دی</p>
        </li>
        <li class="flex flex-wrap items-center justify-between">
          <p class="text-gray-500 font-semibold">ایمیل</p>
          <p class="font-semibold break-words">mostafa.021fa@gmail</p>
        </li>
      </ul>

      <hr class="border-gray-200 my-4">

      <div class="mt-4">
        <p class="mb-2 font-semibold">کدهای خریداری شده</p>
        <ul class="grid gap-2 text-sm text-white text-opacity-95 font-semibold">
          <li class="flex items-center gap-2 justify-between p-3 bg-brand rounded-2xl text-white">
            <p>گیفت کارت نیتندو 50 دلاری</p>
            <p class="font-isans-ed">7200023</p>
          </li>
          <li class="flex items-center gap-2 justify-between p-3 bg-brand rounded-2xl text-white">
            <p>گیفت کارت نیتندو 10 دلاری</p>
            <p class="font-isans-ed">583258</p>
          </li>
        </ul>
      </div>

      <!-- Submit a review -->
      <div class="p-4 rounded-2xl bg-gray-50 grid justify-center gap-4 mt-4">
        <h6 class="font-semibold">با ثبت نظر از ما هدیه بگیرید</h6>
        <a class="btn btn-brand btn-xs" href="#">ثبت نظر</a>
      </div>
      
    </div>
  </div>

</div>