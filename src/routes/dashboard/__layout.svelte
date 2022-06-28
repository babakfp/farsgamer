<script>
	import { browser } from '$app/env'
	import NavMenu from './_lib/NavMenu.svelte'
</script>

<div class="lg:flex lg:items-start lg:gap-4 xl:gap-8">
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
