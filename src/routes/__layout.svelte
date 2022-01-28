<script>
	import { browser } from '$app/env'
	import { page } from '$app/stores'
	import '../app.css'

	import LoadingBar from '$lib/LoadingBar.svelte'
	
	// Layouts
	import Default from '$layouts/Default.svelte'
	import HeaderMmenu from '$layouts/HeaderMmenu.svelte'
	// import Dashboard from '$layouts/Dashboard.svelte'
	
	const layouts = {
		// '<route>': <Layout Component>,
		// '/dashboard': Dashboard,
	}
	$: layout = layouts[$page.url.pathname] ?? HeaderMmenu

	// let pageClass = ''
	$: {
		// if ( $page.url.pathname === '/' ) {
		// 	pageClass = 'page-home'
		// } else {
		// 	let pathnameWithoutFirstSlash = $page.url.pathname.replace('/', '')
		// 	let pathnameAllSlashToDash = pathnameWithoutFirstSlash.replaceAll('/', '-')
		// 	pageClass = `page-${pathnameAllSlashToDash}`
		// }
		
		// browser && document.documentElement.removeAttribute('class')
		// browser && document.documentElement.classList.add(pageClass)

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

<svelte:component this={layout}>
	<slot />
</svelte:component>
