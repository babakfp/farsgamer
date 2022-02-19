<script>
	let className = ''
	export { className as class }

	export let name = null
	export let autocomplete = null
	export let placeholder = null
	export let label = ''
	export let labelClass = ''
	
	export let type = 'text'

	export let value = ''

	let isError = false
	let errorText = ''

	const handleInput = e => {
    value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
		
		if ( e.target.type === 'number' || e.target.type === 'tel' ) {
			if ( value.match(/\D/g) ) {
				value = e.target.value.replace(/\D/g, '')
				isError = true
				errorText = 'فقط عدد مجاز است'
			} else {
				isError = false
				errorText = ''
			}
		}
	}
</script>

<div class:is-error={isError} class="w-full">
	<label class={labelClass} for={name}>{label}</label>
	<input
		class="input {className}"
		{value} {type} {name} id={name} {autocomplete} {placeholder}
		on:input={handleInput} on:change={handleInput}
	/>

	{#if isError}
		<p class="mt-1 text-xs duration-300 ease-in-out">{errorText}</p>
	{/if}
</div>

<style lang="postcss">
	.is-error {
		@apply text-red-700;
	}
	.is-error input {
		@apply border-red-700;
	}
</style>
