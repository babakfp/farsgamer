<script>
	import { setContext, getContext } from "svelte"
	import { writable } from "svelte/store"

	export let className = ""
	export { className as class }

	export let name
	export let required = false
	export let selected = writable(null)
	setContext("name", name)
	setContext("required", required)
	setContext("selected", selected)

	const fieldsValidations = getContext("fieldsValidations")

	$: {
		fieldsValidations.update(currentValue => {
			currentValue[name] = $selected ? true : false
			return currentValue
		})
	}
</script>

<div class={className}>
	<slot />
</div>
