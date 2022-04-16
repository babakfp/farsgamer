<script>
	import { page } from '$app/stores'
	import { isOpen, toggle, dashboardToggle } from '$store/mobile-menu.js'
</script>

<button on:click={$page.url.pathname.includes('/dashboard') ? dashboardToggle() : toggle()} class="js-burger-toggle-btn flex items-center justify-center w-16 h-16 -mr-4 active:scale-95">
	<i class="fg-grid text-gray-600 duration-300 ease-in-out {$isOpen && 'rotate-45'} sm:text-lg"></i>
</button>

<style lang="postcss">
	:global(body.main-header) button {
		@apply lg:hidden !important;
	}
</style>
