<script>
	export let rating = 5
</script>

<div class="relative flex items-center gap-0.5 text-gray-400 dir-ltr">
  <i class="fi-rr-star text-2xs"></i>
  <i class="fi-rr-star text-2xs"></i>
  <i class="fi-rr-star text-2xs"></i>
  <i class="fi-rr-star text-2xs"></i>
  <i class="fi-rr-star text-2xs"></i>
  <div class="absolute flex items-center gap-0.5 text-yellow">
    {#each [...Array(rating).keys()] as _}
			<i class="fi-sr-star text-2xs"></i>
		{/each}
  </div>
</div>
