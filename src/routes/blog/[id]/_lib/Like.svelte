<script>
	let isLiked = false
</script>

<button class="btn w-10 min-w-10 h-10 p-0 text-sm {isLiked ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-500'}" on:click={_=> isLiked = !isLiked}>
	{#if isLiked}
		<svg><use xlink:href="#icon-heart-filled"></use></svg>
	{:else}
		<svg><use xlink:href="#icon-heart"></use></svg>
	{/if}
</button>
