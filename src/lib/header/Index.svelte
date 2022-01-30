<script>
	import { isLoggedIn } from '$store/auth.js'
	import Burger from './Burger.svelte'
	import Logo from './Logo.svelte'
	import Search from './Search.svelte'
	import PhoneNumbers from './PhoneNumbers.svelte'
	import Announcements from './announcements/Index.svelte'
	import { toggle as searchToggle } from '$store/header-search.js'
</script>

<header class="z-40 h-16 flex items-center justify-between bg-white border-b border-gray-100 lg:h-20 lg:px-4" id="header">
  <div class="px-4 mx-auto w-full flex items-center justify-between gap-4 h-full lg:gap-0">
    
		<div id="header__right-side" class="flex items-center lg:w-full lg:h-full">
      <Burger />
      <Logo />
			<Search />
    </div>

    <div class="flex h-full -ml-2">
			<PhoneNumbers />

			<!-- Open search bar -->
      <button
				on:click={searchToggle}
				class="js-header-search-toggle h-full flex items-center px-2 duration-100 hover:text-brand sm:px-2.5 lg:hidden" href="javascript:" title="مشاهده حساب کاربری"
			>
        <i class="fi-rr-search xl:text-xl xs:text-lg"></i>
      </button>

			<Announcements />

      <!-- Go to cart page -->
      <a class="h-full flex items-center px-2 duration-100 hover:text-brand sm:px-2.5" href="/cart" title="مشاهده سبد خرید">
        <div class="relative">
					<i class="fi-rr-shopping-cart xs:text-lg xl:text-xl"></i>
					<div class="absolute flex items-center justify-center -right-1 -top-1 bg-red-400 text-white leading-0 w-3.5 h-3.5 rounded-full text-2xs">2</div>
				</div>
      </a>

      <!-- Go to dashboard page -->
      <a class="h-full flex items-center px-2 duration-100 hover:text-brand sm:px-2.5" href={$isLoggedIn ? '/dashboard' : '/login'} title="مشاهده حساب کاربری">
        <i class="fi-rr-user xl:text-xl xs:text-lg"></i>
      </a>
    </div>

  </div>
</header>

<style lang="postcss">
	:global(body.main-header) #header {
		@apply fixed top-0 right-0 left-0 lg:mr-56 2xl:mr-64;
	}
	:global(body.main-header) #header__right-side {
		@apply lg:-mr-8;
	}
</style>
