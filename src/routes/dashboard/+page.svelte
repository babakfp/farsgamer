<script>
	import { Coupon } from "$components/Form"
	let wallet = true
</script>

<svelte:head>
	<title>داشبورد</title>
</svelte:head>

<div
	class="grid grid-cols-2 gap-4 p-4 rounded bg-white xl:flex xl:justify-between xl:items-center xl:border-0"
>
	<div class="flex items-center gap-2 text-sm">
		<i class="icon-wallet text-lg text-gray-400" />
		<span>موجودی کیف پول</span>
	</div>

	<div class="flex items-center gap-1 justify-end">
		<span class="font-bold tracking-tighter">500,000</span>
		<span class="text-xs">تومان</span>
	</div>

	<form class="col-span-full w-full xl:max-w-88">
		<Coupon
			name="charge-wallet"
			btnText="شارژ کیف پول"
			placeholder="مبلغ مورد نظر خود را وارد کنید"
		/>
		<!-- <small class="block mt-2 text-red-500 text-xs">مبلغ نمی‌تواند کمتر از <b class="tracking-tighter">۱۰,۰۰۰</b> تومان باشد.</small> -->
	</form>
</div>

{#if wallet}
	<div class="table-wrapper mt-8 text-sm">
		<table>
			<thead>
				<tr>
					<th>تاریخ</th>
					<th>شناسه</th>
					<th>افزایش مبلغ</th>
					<th>وضعیت پرداخت</th>
					<th>جزئیات</th>
					<th />
				</tr>
			</thead>

			<tbody class="p-4">
				{#each [...Array(3).keys()] as _}
					<!-- Just a divider -->
					<tr class="h-px bg-gray-100 first:h-0" />

					<tr>
						<td>1400-02-29</td>
						<td>30250</td>
						<td class="whitespace-nowrap"
							><span class="flex items-center gap-1"
								><span class="font-bold">۱۰۰,۰۰۰</span><span class="text-sm">تومان</span></span
							></td
						>
						<td class="whitespace-nowrap">تکمیل شده</td>
						<td class="min-w-32"
							>اعتبار کیف پول از طریق خرید <code class="inline-block">#FFA-982530</code></td
						>
						<td class="min-w-32">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a class="btn btn--xs btn--light rounded-full" href="javascript:">پرداخت</a>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

<style lang="postcss">
	th {
		@apply font-regular;
	}
	/* Not using :first-of-type because of tr divider element */
	tbody tr:nth-of-type(2) td {
		@apply first:rounded-tr last:rounded-tl;
	}
	tbody tr:last-of-type td {
		@apply first:rounded-br last:rounded-bl;
	}
	tbody td {
		@apply p-4 bg-white;
	}
</style>
