<script>
	import { page } from '$app/stores'
	import '../app.css'

	import LoadingBar from '$lib/LoadingBar.svelte'
	
	// Layouts
	import Default from '$layouts/Default.svelte'
	import HeaderMmenu from '$layouts/HeaderMmenu.svelte'
	// import Dashboard from '$layouts/Dashboard.svelte'
	
	const layouts = {
		// '<route>': <Layout Component>,
		// '/dashboard': Dashboard,
	}
	$: layout = layouts[$page.url.pathname] ?? HeaderMmenu
</script>

<LoadingBar />

<svelte:component this={layout}>
	<slot />
</svelte:component>

<style lang="postcss">
	:global(.loading-bar__train::before),
	:global(.loading-bar__train::after) {
		@apply bg-brand;
	}
	:global(.loading-bar) {
		@apply h-1 lg:h-0.5;
	}
	:global(.goup--hidden) {
		@apply translate-y-20;
	}
</style>
