<script>
	import { onMount } from 'svelte'

	let className = null
	export { className as class }

	let tabyEl

	onMount(_=> easyTab(tabyEl))
</script>

<div bind:this={tabyEl}>
	<ul class="{className} flex items-center">
		<slot name="tab" />
	</ul>

	<slot name="body" />
</div>
