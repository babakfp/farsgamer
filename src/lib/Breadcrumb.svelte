<script>
	export let items = []
</script>

<ul class="flex flex-wrap items-center text-gray-500 text-sm">
	{#each items as item, i}
		<li class="inline-flex items-center">
			{#if item.href}
				<a class="link-transition hover:text-brand" href={item.href}>{item.title}</a>
			{:else}
				<span class="text-gray-400">{ item.title }</span>
			{/if}
		</li>
	{/each}
</ul>

<style lang="postcss">
	li:not(:last-child)::after {
		content: "/";
		@apply text-xs text-gray-300 mx-1;
	}  
</style>
