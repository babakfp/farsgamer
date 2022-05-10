<script>
	import { browser } from '$app/env'
	import { page } from '$app/stores'
	import '../app.css'

	import LoadingBar from '$lib/LoadingBar.svelte'

	// Layouts
	import LayoutManager from '$layouts/LayoutManager.svelte'
	import HeaderMmenu from '$layouts/HeaderMmenu.svelte'

	$: {
		// Because of the dashboard layout we need to add a class to dashboard pages so we be able to control the style of some elemetns.
		if ( $page.url.pathname.includes('/dashboard') ) {
			browser && document.body.classList.add('dashboard-header')
			browser && document.body.classList.remove('main-header')
		} else {
			browser && document.body.classList.add('main-header')
			browser && document.body.classList.remove('dashboard-header')
		}
	}
</script>

<LoadingBar />

<LayoutManager defaultLayout={HeaderMmenu}>
  <slot />
</LayoutManager>
