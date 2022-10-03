<script>
	import { range } from '$utilities/helpers'
	export let maxNumberOfPage
	export let currentPageNumber
	export let baseUrl
</script>

<div class="flex items-center justify-center gap-4 mt-12">

	{#if currentPageNumber !== 1}
		<a class="btn btn--gray btn--outline h-10 w-10 p-2" href="{baseUrl}?page={currentPageNumber - 1}">
			<i class="icon-angle-double-small-right"></i>
		</a>
	{/if}

	<ul class="flex items-center gap-2">
		{#each range(1, maxNumberOfPage) as pageNumber}
			{@const isCurrentPage = currentPageNumber === pageNumber}
			<li>
				<a class="btn btn--outline h-10 w-10 p-2 {isCurrentPage && 'bg-brand text-white font-bold pointer-events-none'}" href="{baseUrl}?page={pageNumber}">
					{pageNumber}
				</a>
			</li>
		{/each}
	</ul>

	{#if currentPageNumber !== maxNumberOfPage && currentPageNumber < maxNumberOfPage}
		<a class="btn btn--gray btn--outline h-10 w-10 p-2" href="{baseUrl}?page={currentPageNumber + 1}">
			<i class="icon-angle-double-small-left"></i>
		</a>
	{/if}

</div>
