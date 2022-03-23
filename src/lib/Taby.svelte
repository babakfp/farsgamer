<script>
	import { onMount } from 'svelte'

	export let className = null
	export { className as class }

	let easytab
	onMount(_=> new EasyTab(easytab))
</script>

<nav bind:this={easytab}>
	<ul class="{className} tabs flex items-center pb-2 -mb-2 scrollbar-x scrollbar-x-spacing-lg overflow-y-hidden">
		<slot name="tab" />
	</ul>

	<slot name="body" />
</nav>

<style lang="postcss">
	.tabs::-webkit-scrollbar-thumb {
		@apply bg-gray-200;
	}
</style>
