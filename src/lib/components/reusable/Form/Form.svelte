<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

  // Custom class
	export let className = ''; export { className as class }

	export let isFormValid = true
  
  // Send it to child components
  export const allFormValidations = writable({})
	setContext('allFormValidations', allFormValidations)

  $: {
    for (const key in $allFormValidations) {
      const validationValue = $allFormValidations[key]
      if (validationValue === false) {
        isFormValid = false
        break
      }
      isFormValid = true
    }
  }
</script>

<form
	class="
    {className}
    {isFormValid ? 'valid' : 'invalid'}
  "
	on:submit|preventDefault
>
	<slot />
</form>
