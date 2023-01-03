<script>
	import { Form, Input } from "$components/Form"
	export let name
	export let btnText
	export let value = ""
	export let classContainer = ""
	export let placeholder = ""
	export let errorMessage = ""
	export let successMessage = ""
</script>

<Form on:submit>
	<Input
		type="coupon"
		bind:value
		{classContainer}
		{name}
		{placeholder}
		{errorMessage}
		{successMessage}
		classField="!pl-32"
	>
		<button
			class="btn btn--light h-[calc(var(--input)-.5rem)] absolute top-1/2 -translate-y-1/2 left-1 w-28 origin-left text-sm active:scale-y-100 bg-white"
			>{btnText}</button
		>
		<svelte:fragment slot="description">
			<slot name="description" />
		</svelte:fragment>
	</Input>
</Form>
