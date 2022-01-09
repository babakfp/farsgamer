<script>
	import { browser } from '$app/env';
	import Header from '$lib/header/Index.svelte'
	import Sidebar from '$lib/sidebar/Index.svelte'
	import TPAlert from '$lib/TPAlert.svelte'
	import Footer from '$lib/footer/Index.svelte'

	if (browser) document.body.classList.add('header-and-sidebar-fixed')
</script>

<Header />
<Sidebar />
<TPAlert />

<main class="mt-16 lg:mt-20 lg:pr-56 2xl:pr-64">
	<div class="page-content relative p-4 overflow-x-hidden lg:p-8">
		<slot />
	</div>

	<Footer />
</main>
