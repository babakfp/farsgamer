<script>
	import { cartItems } from '$store/cart.js'
	export let isPurchaseProcessedSuccessfullyPage = true
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<div class="table-wrapper">
	<table>

		<thead class="text-sm text-gray-500">
			<tr>
				<th>محصول</th>
				<th />
				<th>قیمت</th>
				{#if isPurchaseProcessedSuccessfullyPage}
					<th>حذف</th>
				{/if}
			</tr>
		</thead>
		
		<tbody class="p-4">
			{#each $cartItems as item (item.id)}

				<!-- Just a divider -->
				<tr class="h-px bg-gray-100 first:h-0"></tr>
				
				<tr class="border-0">
					<td class="min-w-40 w-40">
						<a class="flex p-4 -m-4 duration-150 ease-in-out hover:grayscale" href="/shop/1">
							<img class="rounded" src={item.src} alt loading="lazy">
						</a>
					</td>

					<td>
						<a href="/shop/1">
							<h3 class="text-sm font-medium">{item.title}</h3>
						</a>
						<ul class="mt-1 leading-5 text-xs text-gray-500">
							<li class="flex gap-1 line-clamp-1">
								<span class="text-gray-500">نوع:</span>
								<span class="font-medium">{item.account.category}</span>
							</li>
							<li class="flex gap-1 line-clamp-1">
								<span class="text-gray-500">ایمیل:</span>
								<span class="font-medium font-dana-en">{item.account.email}</span>
							</li>
							<li class="flex gap-1 line-clamp-1">
								<span class="text-gray-500">رمز:</span>
								<span class="font-medium font-dana-en">{item.account.password}</span>
							</li>
							<li class="flex gap-1 line-clamp-1">
								<span class="text-gray-500">تحویل سریع:</span>
								<span class="font-medium">{item.account.fastDelivery ? 'بله' : 'خیر'}</span>
							</li>
						</ul>
					</td>

					<td>
						<div class="flex items-center gap-1 whitespace-nowrap">
							<p class="text-lg font-semibold">{item.price}</p>
							<p class="text-sm">تومان</p>
						</div>
					</td>

					{#if isPurchaseProcessedSuccessfullyPage}
						<td>
							<button class="btn btn--light w-10 duration-200" on:click={_=> cartItems.update(currentValue => currentValue.filter(product => product.id !== item.id))}>
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
	thead th:last-of-type,
	tbody td:last-of-type {
		@apply pl-8 text-left;
	}
	tbody td:last-of-type > * {
		@apply float-left;
	}
	th:nth-of-type(2),
	td:nth-of-type(2) {
		@apply !pr-0 !pl-8;
	}
</style>
