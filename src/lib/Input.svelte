<script>
	let className = ''
	export {className as class}

	export let name = null
	export let autocomplete = null
	export let placeholder = null
	export let label = ''
	
	export let type = 'text'

	export let value = ''

	let err = false
	let errText = ''

	const handleInput = e => {
    value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
		
		if ( e.target.type === 'number' || e.target.type === 'tel' ) {
			if ( value.match(/\D/g) ) {
				value = e.target.value.replace(/\D/g, '')
				err = true
				errText = 'فقط عدد مجاز است'
			} else {
				err = false
				errText = ''
			}
		}
	}
</script>

<div class:err>
	<label for={name}>{label}</label>
	<input
		class="input {className}"
		{value} {type} {name} id={name} {autocomplete} {placeholder}
		on:input={handleInput} on:change={handleInput}
	/>

	{#if err}
		<p class="mt-1 text-xs duration-300 ease-in-out {err ? 'h-auto' : 'h-0'}">{errText}</p>
	{/if}
</div>

<style lang="postcss">
	.err {
		@apply text-red-700;
	}
	.err input {
		@apply border-red-700;
	}
</style>
