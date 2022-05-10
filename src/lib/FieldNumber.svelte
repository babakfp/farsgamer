<script>
	export let wrapperClass = ''
	export let fieldClass = ''

	export let boxedSizeField = false

	export let name = null
	export let autocomplete = null
	export let placeholder = null
	export let label = null
	export let labelClass = ''

	export let value = null
	export let min = null
	export let max = null

	let isError = false
	let errorText = ''

	$: {
		if (min && value < min) value = min
		if (max && value > max) value = max
	}
</script>

<div class="{wrapperClass} {isError && 'is-error'}">

	{#if label}
		<label
			class="mb-0 {labelClass}"
			for={name ? `input[type:number]=${name}` : null}
		>
			{label}
		</label>
	{/if}

	<div>
		<input
			class="input {boxedSizeField && 'w-18 text-center'} {fieldClass}"
			bind:value {name} {autocomplete} {placeholder}
			id={name ? `input[type:number]=${name}` : null}
			type="number"
		/>
		<slot name="inside-field" />
	</div>

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

	/* START: Remove up and down angles */

	/* Chrome, Safari, Edge, Opera */
	input[type=number]::-webkit-outer-spin-button,
	input[type=number]::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type=number] {
		-moz-appearance: textfield;
	}

	/* END: Remove up and down angles */
</style>
