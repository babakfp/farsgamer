<script>
	import FieldNumber from '$lib/FieldNumber.svelte'
	export let placeholder
	export let btnText
	export let value
	export let wrapperClass
</script>

<FieldNumber
	bind:value
	{placeholder}
	wrapperClass="relative text-sm {wrapperClass}"
	fieldClass="pl-32 {value ? 'dir-ltr' : ''}"
>
	<button slot="inside-field" class="btn btn--gray bg-white absolute top-1 left-1 w-28">{btnText}</button>
</FieldNumber>
