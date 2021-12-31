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

<main id="main">
	<slot />

	<Footer />
</main>

