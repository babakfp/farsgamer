<script>
	import { isLoggedIn } from '$store/auth.js'
	import { cartItems } from '$store/cart.js'
	import OpenMobileMenu from './OpenMobileMenu.svelte'
	import Logo from './Logo.svelte'
	import Search from './Search.svelte'
	import PhoneNumbers from './PhoneNumbers.svelte'
	import Announcements from './announcements/Index.svelte'
	import { toggle } from '$store/header-search.js'
	import TopAlert from '$components/TopAlert.svelte'
</script>

<TopAlert />

<header class="z-20 sticky top-0 inset-x-0 h-header flex items-center justify-between bg-white border-b border-gray-100 lg:px-4">
  <div class="px-4 mx-auto w-full flex items-center justify-between gap-4 h-full lg:gap-0">

		<div id="header__right-side" class="flex items-center lg:w-full lg:h-full">
      <OpenMobileMenu />
      <Logo />
			<Search />
    </div>

    <div class="flex h-full -ml-2">
			<PhoneNumbers />

			<!-- Open search bar -->
      <button class="h-full flex items-center px-2 text-gray-600 duration-100 hover:text-brand sm:px-2.5 lg:hidden" title="مشاهده حساب کاربری" on:click={toggle}>
        <i class="icon-search xs:text-lg xl:text-xl"></i>
      </button>

			<Announcements />

      <!-- Go to cart page -->
      <a class="h-full flex items-center px-2 text-gray-600 duration-100 hover:text-brand sm:px-2.5" href="/cart" title="مشاهده سبد خرید">
        <div class="relative">
					<i class="icon-shopping-cart xs:text-lg xl:text-xl"></i>
					
					{#if $cartItems.length > 0}
						<div class="absolute flex items-center justify-center -right-1 -top-1 w-3.5 h-3.5 text-2xs bg-red-400 text-white rounded-full">
							{$cartItems.length}
						</div>
					{/if}
				</div>
      </a>

      <!-- Go to dashboard page -->
      <a class="h-full flex items-center px-2 text-gray-600 duration-100 hover:text-brand sm:px-2.5" href={$isLoggedIn ? '/dashboard' : '/login'} title="مشاهده حساب کاربری">
        <i class="icon-user xs:text-lg xl:text-xl"></i>
      </a>
    </div>

  </div>
</header>

<style lang="postcss">
	:global(body.main-header) header,
	:global(body.main-header #TopAlert) {
		@apply lg:mr-56 2xl:mr-64;
	}
	:global(body.main-header) #header__right-side {
		@apply lg:-mr-8;
	}
</style>
