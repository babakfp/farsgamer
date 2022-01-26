<script>
	import { browser } from '$app/env'
	import NavItem from '$lib/sidemenu/NavItem.svelte'
	import NavMenu from './lib/NavMenu.svelte'
</script>

<div class="2md:flex 2md:items-start 2md:gap-4 xl:gap-8">
	<NavMenu />
	<div class="w-full">
		<slot />
	</div>
</div>
