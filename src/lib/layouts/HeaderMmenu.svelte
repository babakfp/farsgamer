<script>
	import { browser } from '$app/env'
	import Header from '$lib/header/Index.svelte'
	import SideMenu from '$lib/sidemenu/Index.svelte'
	import { Footer } from '$partials/Footer'
	import Crisp from '$lib/Crisp.svelte'
</script>

<Header />
<SideMenu />

<main id="main">
	<div id="page-content" class="relative p-4 overflow-x-hidden sm:p-6 2xl:p-8 2xl:pb-12">
		<slot />
	</div>

	<Footer />
</main>

<Crisp />

<style lang="postcss">
	:global(body.main-header) #main {
		@apply lg:pr-56 2xl:pr-64;
	}
</style>
