<script>
	export let value = 5
</script>

<ol class="flex gap-1">
	{#each [...Array(5).keys()] as i}
		<li>
			<label class="group relative flex items-center justify-center w-8 h-8 mb-0 {value >= i + 1 ? 'bg-yellow bg-opacity-5' : 'bg-gray-50'} rounded">
				<input class="hidden" type="radio"name="rating" bind:group={value} value={i + 1}>
				<i class="{value >= i + 1 ? 'icon-star-solid text-yellow' : 'icon-star text-gray-400' }" />

				<span class="absolute opacity-0 w-12 h-6 flex items-center justify-center bg-gray-50 rounded-sm -top-7 translate-x-1/2 right-1/2 text-2xs duration-200 ease-in-out group-hover:opacity-100">{i + 1} ستاره</span>
			</label>
		</li>
	{/each}
</ol>
