<script>
	import { browser } from '$app/env'
	import NavItem from '$lib/sidebar/NavItem.svelte'
	import NavMenu from './lib/NavMenu.svelte'

	// if (browser) document.body.classList.remove('main-header')
	// if (browser) document.body.classList.add('dashboard-header')
</script>

<div class="md2:flex md2:items-start md2:gap-4 xl:gap-8">
	<NavMenu />
	<div class="w-full">
		<slot />
	</div>
</div>
