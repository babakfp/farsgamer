<script>
	export let dirLtr = true
	export let rating = 5
	export let vertical = false
</script>

<div class="relative flex items-center gap-0.5 text-gray-300 {dirLtr && 'dir-ltr'} {vertical && 'grid !items-start'}">
	{#each [...Array(5).keys()] as _}
		<i class="icon-star text-2xs"></i>
	{/each}
	
  <div class="absolute flex items-center gap-0.5 text-yellow {vertical && 'grid'}">
    {#each [...Array(rating).keys()] as _}
			<i class="icon-star-solid text-2xs"></i>
		{/each}
  </div>
</div>
