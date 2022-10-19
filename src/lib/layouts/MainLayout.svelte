<script>
	import { fly } from 'svelte/transition'
	import { page } from '$app/stores'
	import Header from '$partials/Header/Header.svelte'
	import Sidebar from '$partials/Sidebar/Sidebar.svelte'
	import Footer from '$partials/Footer/Footer.svelte'
	import Crisp from '$components/Crisp.svelte'
</script>

<a href="#main" class="sr-only">رد شدن به محتوای اصلی</a>

<Header />
<Sidebar />

{#key $page.url.origin + $page.url.pathname}
	<main id="main" in:fly={{ delay: 100, duration: 500, y: -32 }}>
		<div id="page-content" class="container relative py-page overflow-x-hidden xl:pb-12">
			<slot />
		</div>

		<Footer />
	</main>
{/key}

<Crisp />

<style lang="postcss">
	:global(body.main-header) main {
		@apply lg:pr-56 2xl:pr-64;
	}
</style>
