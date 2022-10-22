<script>
	import { goto } from '$app/navigation'
	import { isLoggedIn } from '$store/global.js'
	isLoggedIn.set(false)
	goto('/')
</script>

<svelte:head>
	<title>خروج از حساب</title>
</svelte:head>
