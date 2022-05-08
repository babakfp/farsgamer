<script>
	export let prevLink = null
	export let nextLink = 'javascript:'
</script>

<div class="flex items-center justify-center gap-4 mt-12">

	{#if prevLink}
		<a class="btn btn--gray btn--outline h-10 w-10 p-2" href={prevLink}>
			<i class="icon-angle-double-small-right"></i>
		</a>

		<hr class="h-6 border-t-0 border-r-2 border-dashed border-gray-200">
	{/if}

	<ul class="flex items-center gap-2">
		<li>
			<a class="btn btn--gray btn--outline h-10 w-10 p-2 border-0 !bg-brand !bg-opacity-20 text-brand font-bold pointer-events-none" href="javascript:">2</a>
		</li>
		<li>
			<a class="btn btn--gray btn--outline h-10 w-10 p-2" href="javascript:">3</a>
		</li>
		<li class="flex items-center justify-center h-10 w-10">
			<i class="icon-menu-dots"></i>
		</li>
		<li>
			<a class="btn btn--gray btn--outline h-10 w-10 p-2" href="javascript:">9</a>
		</li>
	</ul>

	{#if nextLink}
		<hr class="h-6 border-t-0 border-r-2 border-dashed border-gray-200">

		<a class="btn btn--gray btn--outline h-10 w-10 p-2" href={nextLink}>
			<i class="icon-angle-double-small-left"></i>
		</a>
	{/if}

</div>
