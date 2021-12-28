<script>
	import Search from './Search.svelte'
	import StreamCard from './StreamCard.svelte'
</script>

<sidebar id="sidebar">

  <div id="sidebar__content">
    
    <a id="sidebar__logo" class="hidden px-6 pr-8 h-16 items-center lg:h-20 lg:absolute lg:-top-20 lg:right-0 lg:left-0 lg:bg-white" href="/">
			<div class="flex">
				<img class="lg:w-34" src="/images/logo.png" alt="لوگو">
			</div>
		</a>

    <div id="sidebar__scrollable-content" class="overflow-y-auto max-h-full px-4 pb-6">

			<Search />
      
      <!-- Nav Menu ... -->
      <nav class="py-4">
        <ul>
          <li><a class="nav-menu-item nav-menu-item--active" href="/">
            <i class="nav-menu-item__icon fi-rr-home"></i>
            <span class="nav-menu-item__title">خانه</span>
          </a></li>
          <li><a class="nav-menu-item" href="/shop">
            <i class="nav-menu-item__icon fi-rr-shop"></i>
            <span class="nav-menu-item__title">فروشگاه</span>
          </a></li>
          <li><a class="nav-menu-item" href="/faq">
            <i class="nav-menu-item__icon fi-rr-interrogation"></i>
            <span class="nav-menu-item__title">سوالات متداول</span>
          </a></li>
          <li><a class="nav-menu-item" href="/terms">
            <i class="nav-menu-item__icon fi-rr-bank"></i>
            <span class="nav-menu-item__title">قوانین</span>
          </a></li>
          <li><a class="nav-menu-item" href="/contact">
            <i class="nav-menu-item__icon fi-rr-headset"></i>
            <span class="nav-menu-item__title">ارتباط با ما</span>
          </a></li>
          <li><a class="nav-menu-item" href="/why-farsgamer">
            <i class="nav-menu-item__icon fi-rr-diploma"></i>
            <span class="nav-menu-item__title">چرا فارس گیمر</span>
          </a></li>
          <li><a class="nav-menu-item" href="/posts">
            <i class="nav-menu-item__icon fi-rr-document"></i>
            <span class="nav-menu-item__title">مقالات</span>
          </a></li>
        </ul>
      </nav>
      <!-- ... Nav Menu -->

      <hr class="border-gray-200 mb-4">

      <!-- Streams ... -->
      <div>
        <a class="mb-2 block font-semibold link" href="/streams">استریم ها</a>
        <ul class="grid gap-2">
          <StreamCard />
          <StreamCard />
          <StreamCard />
          <StreamCard />
          <StreamCard />
          <StreamCard />
          <StreamCard />
          <StreamCard />
          <StreamCard />
          <StreamCard />
          <StreamCard />
          <StreamCard />
          <StreamCard />
          <StreamCard />
        </ul>
      </div>
      <!-- ... Streams -->

    </div>
  </div>

</sidebar>