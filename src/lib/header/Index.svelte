<script>
	import Burger from './Burger.svelte'
	import Search from './Search.svelte'
</script>

<header id="header">

  <div class="container-base flex items-center justify-between gap-4 h-full">
    
    <div class="flex items-center lg:gap-8">
      
      <Burger />

      <!-- Site Logo -->
      <a href="/" id="header__logo" class="h-16 flex items-center lg:h-20">
        <img src="/images/logo.png" class="w-24 xss:w-28 lg:w-32" alt="لوگو">
      </a>

			<Search />

    </div>

    <div class="flex h-full -ml-2">

			<!-- Phone support numbers -->
			<div class="hidden xss:grid xs:flex xs:gap-2 h-full justify-items-end text-left text-sm tracking-wider pl-4 ml-4 border-l border-gray-100">
				<!-- main call line -->
				<a class="h-full flex items-end duration-100 hover:text-brand xs:items-center" href="tel:05891010109" title="تماس تلفنی مستقیم">05891010109</a>
				<i class="fi fi-rr-minus opacity-50"></i>
				<a class="h-full flex items-top duration-100 hover:text-brand xs:items-center" href="tel:05891011832" title="تماس تلفنی مستقیم">05891011832</a>
			</div>

			<!-- Announcements -->
      <div class="announcements">
				<button class="announcements__toggle-btn h-full flex items-center px-2.5 duration-100 hover:text-brand focus:-translate-y-1" href="/cart" title="مشاهده اعلانات">
					<div class="relative">
						<i class="fi-rr-bell text-xl"></i>
						<div class="absolute flex items-center justify-center -right-1 -top-1 bg-red-400 text-white leading-0 w-3.5 h-3.5 rounded-full text-2xs">2</div>
					</div>
				</button>

        <div easytab class="announcements__menu hidden">
          <div class="announcements__menu-head">
            <ul class="flex">
              <li easytab-tab>اطلاعیه عمومی</li>
              <li easytab-tab>اطلاعیه شما</li>
            </ul>
            <button class="announcements__close-btn">
              <i class="fi-rr-cross-circle"></i>
            </button>
          </div>
          <div class="py-2">
            <div easytab-content>
              <!-- Show this if nothing find:
                <p class="py-4 text-sm text-center">چیزی پیدا نشد.</p>
              -->
              <ul>
                <li>
                  <a class="group flex items-start gap-2 py-3 px-2 border-r-3 border-transparent bg-white transition duration-200 ease-in-out hover:bg-gray2-50 focus:bg-gray2-50 hover:border-brand focus:border-brand" href="#">
                    <div class="min-w-9 min-h-9 max-w-9 max-h-9 flex items-center justify-center rounded-full bg-gray2-50 group-hover:bg-white group-focus:bg-white">
                      <img class="w-5 -mr-0.5" src="/svg/logo-ninja.svg" alt="لوگو نینجا">
                    </div>
                    <div>
                      <p class="font-semibold text-brand text-sm">پشتیبانی</p>
                      <p class="mt-1 text-xs">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>
                      <p class="text-gray-700 mt-3 text-xs">3 هفته قبل</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div easytab-content>
              <p class="py-4 text-sm text-center">چیزی پیدا نشد.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Go to cart page -->
      <a class="h-full flex items-center px-2.5 duration-100 hover:text-brand focus:-translate-y-1" href="/cart" title="مشاهده سبد خرید">
        <div class="relative">
					<i class="fi-rr-shopping-cart text-xl"></i>
					<div class="absolute flex items-center justify-center -right-1 -top-1 bg-red-400 text-white leading-0 w-3.5 h-3.5 rounded-full text-2xs">2</div>
				</div>
      </a>

      <!-- Go to dashboard page -->
      <a class="h-full flex items-center px-2.5 duration-100 hover:text-brand focus:-translate-y-1" href="/dashboard" title="مشاهده حساب کاربری">
        <i class="fi-rr-user text-xl"></i>
      </a>

    </div>

  </div>

</header>
