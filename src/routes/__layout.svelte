<script>
	import { page } from '$app/stores';
	import '../app.css'

	import LoadingBar from '$lib/LoadingBar.svelte'

	// Layouts
	import Default from '$layouts/Default.svelte'
	import HeaderMmenu from '$layouts/HeaderMmenu.svelte'
	
	const layouts = {
		'/': HeaderMmenu,
	}
	$: layout = layouts[$page.url.pathname] ?? Default
</script>

<LoadingBar />

<svelte:component this={layout}>
	<slot />
</svelte:component>

<style lang="postcss">
	:global(#svelte .loading-bar__train:before),
	:global(#svelte .loading-bar__train:after) {
		@apply bg-brand;
	}
	:global(.loading-bar) {
		@apply h-1 lg:h-0.5;
	}
	:global(.goup--hidden) {
		@apply translate-y-20;
	}
</style>
