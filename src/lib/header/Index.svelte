<script>
	import Burger from './Burger.svelte'
	import Logo from './Logo.svelte'
	import Search from './Search.svelte'
	import PhoneNumbers from './PhoneNumbers.svelte'
	import Announcements from './announcements/Index.svelte'
	import { toggle as searchToggle } from '$store/header-search.js'

	const authed = false
</script>

<header class="z-40 h-16 flex items-center justify-between bg-white border-b border-gray-100 lg:h-20 lg:px-4" id="header">
  <div class="container-base flex items-center justify-between gap-4 h-full lg:gap-0">
    
    <div class="flex items-center lg:w-full lg:h-full lg:-mr-8">
      <Burger />
      <Logo />
			<Search />
    </div>

    <div class="flex h-full -ml-2 2xs:relative">
			<PhoneNumbers />

			<!-- Open search bar -->
      <button
				on:click={searchToggle}
				class="js-header-search-toggle h-full flex items-center px-2 duration-100 hover:text-brand sm:px-2.5 lg:hidden" href="javascript:" title="مشاهده حساب کاربری"
			>
        <i class="fi-rr-search sm:text-xl"></i>
      </button>

			<Announcements />

      <!-- Go to cart page -->
      <a class="h-full flex items-center px-2 duration-100 hover:text-brand sm:px-2.5" href="javascript:" title="مشاهده سبد خرید">
        <div class="relative">
					<i class="fi-rr-shopping-cart sm:text-xl"></i>
					<div class="absolute flex items-center justify-center -right-1 -top-1 bg-red-400 text-white leading-0 w-3.5 h-3.5 rounded-full text-2xs">2</div>
				</div>
      </a>

      <!-- Go to dashboard page -->
      <a class="h-full flex items-center px-2 duration-100 hover:text-brand sm:px-2.5" href={authed ? '/dashboard' : '/login'} title="مشاهده حساب کاربری">
        <i class="fi-rr-user sm:text-xl"></i>
      </a>
    </div>

  </div>
</header>
