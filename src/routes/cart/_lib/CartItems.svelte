<script>
	import FieldNumber from '$components/FieldNumber.svelte'
	export let cartable = true
</script>

<div class="table-wrapper">
	<table>

		<thead class="text-sm text-gray-500">
			<tr>
				<th>محصول</th>
				<th></th>
				<th>قیمت</th>
				<th>تعداد</th>
				{#if cartable}
					<th class="delete">حذف از سبد خرید</th>
				{/if}
			</tr>
		</thead>
		
		<tbody class="p-4">
			{#each [...Array(3).keys()] as _}

				<!-- Just a divider -->
				<tr class="h-px bg-gray-100 first:h-0"></tr>
				
				<tr class="border-0">
					<td class="w-28 h-28 py-4">
						<a href="javascript:">
							<img class="rounded min-w-28 min-h-28" src="/img/products/product-thumb (1).png" alt loading="lazy">
						</a>
					</td>

					<td>
						<a href="javascript:">
							<h3 class="text-sm font-bold line-clamp-1">بتل پس چپتر 2 سیزن 5</h3>
						</a>
						<ul class="mt-2 space-y-1 text-gray-500 text-xs">
							<li class="flex gap-1 line-clamp-1">
								<span>نوع اکانت:</span>
								<span class="font-medium">اپیک گیمز</span>
							</li>
							<li class="flex gap-1 line-clamp-1">
								<span>ایمیل:</span>
								<span class="font-medium">mostafa.021g@gmail.com</span>
							</li>
							<li class="flex gap-1 line-clamp-1">
								<span>رمز:</span>
								<span class="font-medium">583258</span>
							</li>
							<li class="flex gap-1 line-clamp-1">
								<span>مایل به دریافت سریع تر:</span>
								<span class="font-medium">بلی</span>
							</li>
						</ul>
					</td>

					<td>
						<div class="flex items-center gap-1 whitespace-nowrap">
							<p class="text-lg font-bold">100,000</p>
							<p class="text-sm">تـمـنـ</p>
						</div>
					</td>

					<td>
						{#if cartable}
							<FieldNumber
								value="1" min={1} max={10} name="quantity"
								wrapperClass="flex items-center gap-4"
								boxedSizeField={true}
							/>
						{:else}
							<span>1</span>
						{/if}
					</td>

					{#if cartable}
						<td class="delete">
							<button class="btn btn--light w-10 duration-200">
								<i class="icon-trash"></i>
							</button>
						</td>
					{/if}
				</tr>
			{/each}
		</tbody>
		
	</table>
</div>

<style lang="postcss">
	th {
		@apply font-regular;
	}
	/* Not using :first-of-type because of tr divider element */
	tbody tr:nth-of-type(2) td {
		@apply first:rounded-tr last:rounded-tl
	}
	tbody tr:last-of-type td {
		@apply first:rounded-br last:rounded-bl
	}
	tbody td {
		@apply p-4 bg-white;
	}
	thead th.delete,
	tbody td.delete {
		@apply pl-8 text-left;
	}
</style>
