<script>
	import { isLoggedIn } from "$store/global.js"
	import { cartItems } from "$store/cart.js"
	import OpenMobileMenu from "./OpenMobileMenu.svelte"
	import Logo from "./Logo.svelte"
	import Search from "./Search.svelte"
	import PhoneNumbers from "./PhoneNumbers.svelte"
	import Announcements from "./announcements/Index.svelte"
	import { isOpen } from "$store/header-search.js"
	import TopAlert from "$components/TopAlert.svelte"
	import LeftItem from "./LeftItem.svelte"
</script>

<TopAlert />

<header
	class="z-20 sticky top-0 inset-x-0 h-header flex items-center justify-between bg-white border-b border-gray-100 lg:px-4"
>
	<div class="px-4 mx-auto w-full flex items-center justify-between gap-4 h-full lg:gap-0">
		<div id="header__right-side" class="flex items-center lg:w-full lg:h-full">
			<OpenMobileMenu />
			<Logo />
			<Search />
		</div>

		<div class="flex h-full -ml-2">
			<PhoneNumbers />

			<!-- SEARCH -->
			<LeftItem
				tag="button"
				class="lg:hidden"
				icon="icon-search"
				title="مشاهده حساب کاربری"
				on:click={() => ($isOpen = !$isOpen)}
			/>

			<Announcements />

			<!-- CART -->
			<LeftItem
				tag="a"
				icon="icon-shopping-cart"
				href="/cart"
				title="مشاهده سبد خرید"
				count={$cartItems.length}
			/>

			<!-- DASHBOARD -->
			<LeftItem
				tag="a"
				icon="icon-user"
				href={$isLoggedIn ? "/dashboard" : "/login"}
				title={$isLoggedIn ? "مشاهده حساب کاربری" : "ورود به حساب کاربری"}
			/>
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
