<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

  // Custom class
	export let className = ''
	export { className as class }

  // Send it to child components
	export const isFormValid = writable(true)
	setContext('isFormValid', isFormValid)
</script>

<form
	class="
    {className}
    {$isFormValid ? 'valid' : 'invalid'}
  "
	on:submit|preventDefault
>
	<slot />
</form>
