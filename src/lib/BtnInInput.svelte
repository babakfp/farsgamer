<script>
	export let placeholder
	export let btnText
	
	let className = ''
	export { className as class }

	let value = ''
</script>

<div class="relative text-sm {className}">
	<input class="input pl-32 {value && 'dir-ltr'} input-no-arrows" type="number" bind:value {placeholder}>
	<button class="btn btn--gray bg-white absolute top-1 left-1 w-28">{ btnText }</button>
</div>
