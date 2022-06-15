<script>
	import { browser } from '$app/env'
	import Header from '$partials/Header/Header.svelte'
	import Sidebar from '$partials/Sidebar/Sidebar.svelte'
	import Footer from '$partials/Footer/Footer.svelte'
	import Crisp from '$lib/Crisp.svelte'
</script>

<Header />
<Sidebar />

<main>
	<div id="page-content" class="container relative py-page overflow-x-hidden xl:pb-12">
		<slot />
	</div>

  <!-- TODO: Put it outside of the main tag -->
	<Footer />
</main>

<Crisp />

<style lang="postcss">
	:global(body.main-header) main {
		@apply lg:pr-56 2xl:pr-64;
	}
</style>
