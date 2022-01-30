<script>
	import { browser } from '$app/env'
	import Header from '$lib/header/Index.svelte'
	import SideMenu from '$lib/sidemenu/Index.svelte'
	import TPAlert from '$lib/TPAlert.svelte'
	import Footer from '$lib/footer/Index.svelte'
</script>

<Header />
<SideMenu />
<TPAlert />

<main id="main">
	<div id="page-content" class="relative p-4 overflow-x-hidden sm:p-6 2xl:p-8 2xl:pb-12">
		<slot />
	</div>

	<Footer />
</main>

<style lang="postcss">
	:global(body.main-header) #main {
		@apply lg:pr-56 2xl:pr-64;
	}
</style>
