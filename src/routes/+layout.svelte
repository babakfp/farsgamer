<script>
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
  import '$lib/styles/app.postcss'

	import LoadingBar from '$components/LoadingBar.svelte'

	// Layouts
	import LayoutManager from '$layouts/LayoutManager.svelte'
	import MainLayout from '$layouts/MainLayout.svelte'

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

  browser && document.body.classList.add('fully-loaded')
</script>

<LoadingBar />

<LayoutManager defaultLayout={MainLayout}>
  <slot />
</LayoutManager>
