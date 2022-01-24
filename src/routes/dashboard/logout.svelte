<script>
	import { browser } from '$app/env'
	import { goto } from '$app/navigation'
	browser && localStorage.removeItem('isLoggedIn')
	goto('/')
</script>
