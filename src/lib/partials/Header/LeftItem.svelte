<script>
	export let tag
	export let icon
	export let title = null
	export let href = null
	export let count = null
	export let ref = null
	export let className = null
	export { className as class }
</script>

<svelte:element class="h-full flex items-center px-2 text-gray-600 duration-150 hover:text-brand focus-visible:text-brand sm:px-2.5 | {className}"
	bind:this={ref} this={tag}
	{href} {title} on:click
>
	{#if count}
		<div class="relative">
			<i class="{icon} xs:text-lg xl:text-xl" />
			<div class="absolute flex items-center justify-center -right-1 -top-1 w-3.5 h-3.5 text-2xs bg-red-400 text-white rounded-full">
				{count}
			</div>
		</div>
	{:else}
		<i class="{icon} xs:text-lg xl:text-xl" />
	{/if}
</svelte:element>
