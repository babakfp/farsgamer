<script>
	export let value
</script>

<ol class="flex gap-1">
	{#each [...Array(5).keys()] as i}
		<li>
			<label class="relative group">
				<input class="hidden" type="radio"name="rating" bind:group={value} value={ i + 1 }>
				<i class="{value >= i + 1 ? 'fi-sr-star text-yellow' : 'fi-rr-star text-gray-400' }"></i>

				<span class="absolute opacity-0 w-6 h-6 flex items-center justify-center bg-gray-100 rounded-sm -top-7 translate-x-1/2 right-1/2 text-xs duration-200 ease-in-out group-hover:opacity-100">{ i + 1 }</span>
			</label>
		</li>
	{/each}
</ol>
