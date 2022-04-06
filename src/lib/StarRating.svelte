<script>
	export let dirLtr = true
	export let rating = 5
</script>

<div class="relative flex items-center gap-0.5 text-gray-400 {dirLtr && 'dir-ltr'}">
	{#each [...Array(5).keys()] as _}
		<i class="fg-star text-2xs"></i>
	{/each}
	
  <div class="absolute flex items-center gap-0.5 text-yellow">
    {#each [...Array(rating).keys()] as _}
			<i class="fg-star-solid text-2xs"></i>
		{/each}
  </div>
</div>
