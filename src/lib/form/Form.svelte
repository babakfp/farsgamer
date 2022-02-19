<script>
	import { setContext } from 'svelte'

	let className = ''
	export {className as class}
	
	export let isValid = true
	setContext('isValid', isValid)
</script>

<form class={className} on:submit|preventDefault>
	<slot />
</form>
