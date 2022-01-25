<script>
	import { browser } from '$app/env'
	import Header from '$lib/header/Index.svelte'
	import SideMenu from '$lib/sidemenu/Index.svelte'
	import TPAlert from '$lib/TPAlert.svelte'
	import Footer from '$lib/footer/Index.svelte'

	if (browser) document.body.classList.add('main-header')
</script>

<Header />
<SideMenu />
<TPAlert />

<main id="main">
	<div class="page-content relative p-4 overflow-x-hidden xl:p-8 xl:pb-12">
		<slot />
	</div>

	<Footer />
</main>

<style lang="postcss">
	:global(body.main-header) #main {
		@apply mt-16 lg:mt-20 lg:pr-56 2xl:pr-64;
	}
</style>
