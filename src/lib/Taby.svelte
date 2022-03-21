<script>
	export let className = null
	export { className as class }
</script>

<div class="easytab">
	<ul class="{className} tabs flex items-center pb-2 -mb-2 scrollbar-x scrollbar-x-spacing-lg overflow-y-hidden">
		<slot name="tab" />
	</ul>

	<slot name="body" />
</div>

<style lang="postcss">
	.tabs::-webkit-scrollbar-thumb {
		@apply bg-gray-200;
	}
</style>
