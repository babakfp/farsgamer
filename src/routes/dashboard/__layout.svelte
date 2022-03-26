<script>
	import { browser } from '$app/env'
	import { NavItem } from '$partials/SideMenu'
	import NavMenu from './_lib/NavMenu.svelte'
</script>

<div class="2md:flex 2md:items-start 2md:gap-4 xl:gap-8">
	<NavMenu />
	<div class="w-full">
		<slot />
	</div>
</div>

<style lang="postcss">
	:global(body.dashboard-header #page-content) {
		@apply 2xl:p-8 2xl:pb-12;
	}
</style>
