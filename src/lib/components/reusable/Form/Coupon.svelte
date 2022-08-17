<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { Form, Input } from '$components/Form'

	export let btnText
	export let value
	export let classContainer
</script>

<Form>
	<Input
		type="coupon"
		bind:value
		classWrapper="text-sm {classContainer}"
		classField="!pl-32"
	>
		<button class="btn btn--light absolute top-1/2 -translate-y-1/2 left-1 w-28 origin-left active:scale-y-100 bg-white">{btnText}</button>
	</Input>
</Form>
