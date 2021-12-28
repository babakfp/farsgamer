<script>
	import Burger from './Burger.svelte'
	import Search from './Search.svelte'
</script>

<header id="header">

  <div class="container-base flex items-center justify-between gap-4">
    
    <div class="flex items-center gap-4 lg:gap-8">
      
      <Burger />

      <!-- Site Logo -->
      <a href="/" id="header__logo" class="h-16 flex items-center lg:h-20">
        <img src="/images/logo.png" class="w-24 xss:w-28 lg:w-32" alt="لوگو">
      </a>

			<Search />

    </div>

    <div class="flex items-center gap-4">

      <!-- Announcements -->
      <div class="announcements">
        <a class="header-widget announcements__toggle-btn" title="مشاهده سبد خرید">
          <i class="icon-bell header-widget__icon"></i>
          <div class="header-widget__bobble">2</div>
        </a>
        <div easytab class="announcements__menu hidden">
          <div class="announcements__menu-head">
            <ul class="flex">
              <li easytab-tab>اطلاعیه عمومی</li>
              <li easytab-tab>اطلاعیه شما</li>
            </ul>
            <button class="announcements__close-btn">
              <i class="icon-cancel"></i>
            </button>
          </div>
          <div class="py-2">
            <div easytab-content>
              <!-- Show this if nothing find:
                <p class="py-4 text-sm text-center">چیزی پیدا نشد.</p>
              -->
              <ul>
                <li>
                  <a class="group flex items-start gap-2 py-3 px-2 border-r-3 border-transparent bg-white transition duration-200 ease-in-out hover:bg-gray2-50 focus:bg-gray2-50 hover:border-primary focus:border-primary" href="#">
                    <div class="min-w-9 min-h-9 max-w-9 max-h-9 flex items-center justify-center rounded-full bg-gray2-50 group-hover:bg-white group-focus:bg-white">
                      <img class="w-5 -mr-0.5" src="/svg/logo-ninja.svg" alt="لوگو نینجا">
                    </div>
                    <div>
                      <p class="font-semibold text-primary text-sm">پشتیبانی</p>
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

      <!-- Cart -->
      <a class="w-7.5 h-7.5 flex items-center justify-center relative  transition duration-200 hover:text-primary focus:text-primary" href="/cart" title="مشاهده سبد خرید">
        <i class="icon-basket text-xl"></i>
        <div class="absolute -right-0.5 -top-0.5 bg-red text-white leading-0 text-center w-4 h-4 rounded-full text-xs flex items-center justify-center">2</div>
      </a>

      <!-- User -->
      <a class="h-7.5 flex items-center justify-center relative gap-2 text-sm transition duration-200 hover:text-primary focus:text-primary" href="/dashboard">
        <i class="icon-user text-xl"></i>
      </a>

      <!-- Site Support Number -->
      <span class="hidden sm:flex pr-4 border-r border-gray2-500 text-sm">
        <a href="tel:+989145555555" title="برای تماس کلیک کنید">9145555555</a>
      </span>

    </div>

  </div>

</header>
