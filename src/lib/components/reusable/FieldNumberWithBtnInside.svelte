<script>
	import FieldNumber from '$components/FieldNumber.svelte'
	export let placeholder = null
	export let btnText
	export let value = null
	export let wrapperClass = null
</script>

<FieldNumber
	bind:value
	{placeholder}
	wrapperClass="relative text-sm {wrapperClass}"
	fieldClass="pl-32 {value && 'dir-ltr'}"
>
	<button slot="inside-field" class="btn btn--gray bg-white absolute top-1/2 -translate-y-1/2 left-1 w-28">{btnText}</button>
</FieldNumber>
