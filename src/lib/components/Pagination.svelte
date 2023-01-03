<script>
	import { range } from "$utilities/helpers"
	export let maxNumberOfPage
	export let currentPageNumber
	export let baseUrl
</script>

<div class="flex items-center justify-center gap-4 mt-12">
	{#if currentPageNumber !== 1}
		<a
			class="btn bg-white h-10 w-10 p-2 hover:bg-gray-200 focus:bg-gray-200 active:scale-95"
			href="{baseUrl}?page={currentPageNumber - 1}"
		>
			<i class="icon-angle-double-small-right" />
		</a>
	{/if}

	<ul class="flex items-center gap-2">
		{#each range(1, maxNumberOfPage) as pageNumber}
			{@const isCurrentPage = currentPageNumber === pageNumber}
			<li>
				<a
					class="
						btn bg-white h-10 w-10 p-2 hover:bg-gray-200 focus:bg-gray-200 active:scale-95
						{isCurrentPage && 'bg-brand text-white pointer-events-none'}
					"
					href="{baseUrl}?page={pageNumber}"
				>
					{pageNumber}
				</a>
			</li>
		{/each}
	</ul>

	{#if currentPageNumber !== maxNumberOfPage && currentPageNumber < maxNumberOfPage}
		<a
			class="btn bg-white h-10 w-10 p-2 hover:bg-gray-200 focus:bg-gray-200 active:scale-95"
			href="{baseUrl}?page={currentPageNumber + 1}"
		>
			<i class="icon-angle-double-small-left" />
		</a>
	{/if}
</div>
