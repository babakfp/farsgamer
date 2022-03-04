<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	let className = null
	export { className as class }

	export let isValid = writable(true)
	setContext('isValid', isValid)
</script>

<form
	class="{className} {isValid ? 'is-valid' : 'not-valid'}"
	on:submit|preventDefault
>
	<slot />
</form>
