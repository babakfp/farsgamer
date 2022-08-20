<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	export let className = ''
	export { className as class }

	export const fieldsValidations = writable({})
	setContext('fieldsValidations', fieldsValidations)

	let isFormValid

	$: if ( Object.keys( $fieldsValidations ).length ) {
		const validations = Object.values( $fieldsValidations )
		console.log(validations)
		if ( validations.includes(false) ) {
			isFormValid = false
		} else {
			isFormValid = true
		}
		console.log(isFormValid)
	}
</script>

<form class={className} on:submit|preventDefault>
	<slot {isFormValid} />
</form>
