<script>
	export let title
	export let count
</script>

<li>
	<button class="easytab__tab flex items-center justify-center gap-2 w-full min-w-36 p-4 text-sm font-bold rounded-t duration-200 ease-in-out lg:hover:text-brand">
		{#if count && count > 0}
			<span>{title}</span>
			<div class="text-sm font-normal">
				<span class="opacity-25">(</span>
				<span>{count}</span>
				<span class="opacity-25">)</span>
			</div>
		{:else}
			{title}
		{/if}
	</button>
</li>

<style lang="postcss">
	li :global(.easytab__tab.active) {
		@apply relative pb-8 -mb-4 bg-white text-brand;

		&::after {
			content: "";
			@apply absolute bottom-4 inset-x-0 border-b border-gray-100 border-dashed;
		}
	}
</style>
