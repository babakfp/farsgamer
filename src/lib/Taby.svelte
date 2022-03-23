<script>
	import { onMount } from 'svelte'

	export let className = null
	export { className as class }

	let easytab
	onMount(_=> new EasyTab(easytab))
</script>

<div class="{className}" bind:this={easytab}>
	<nav>
		<ul class="tabs flex items-center pb-2 -mb-2 scrollbar-x scrollbar-x-spacing-lg overflow-y-hidden">
			<slot name="tab" />
		</ul>
	</nav>

	<slot name="body" />
</div>

<style lang="postcss">
	.tabs::-webkit-scrollbar-thumb {
		@apply bg-gray-200;
	}
</style>
