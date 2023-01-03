<script>
	let isLiked = false
</script>

<button
	class="btn w-10 min-w-10 h-10 p-0 text-sm {isLiked
		? 'bg-red-100 text-red-500'
		: 'bg-gray-100 text-gray-500'}"
	on:click={() => (isLiked = !isLiked)}
>
	{#if isLiked}
		<i class="icon-heart-solid" />
	{:else}
		<i class="icon-heart" />
	{/if}
</button>
