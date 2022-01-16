<script>
	import BtnInInput from '$lib/BtnInInput.svelte'
</script>

<div class="grid grid-cols-2 gap-4 p-4 rounded bg-white xl:flex xl:justify-between xl:items-center xl:border-0">

	<div class="flex items-center gap-2 text-sm">
		<i class="icon-wallet text-lg text-green-700"></i>
		<span>موجودی کیف پول</span>
	</div>

	<div class="flex items-center gap-1 justify-end">
		<span class="font-bold tracking-tighter">500,000</span>
		<span class="text-xs">تومان</span>
	</div>

	<form class="col-span-full w-full xl:max-w-88">
		<BtnInInput btnText="شارژ کیف پول" placeholder="مبلغ مورد نظر خود را وارد کنید" />
		<!-- <small class="block mt-2 text-red-500 text-xs">مبلغ نمی‌تواند کمتر از <b class="tracking-tighter">۱۰,۰۰۰</b> تومان باشد.</small> -->
	</form>

</div>

<div class="table-wrapper mt-4 p-4 rounded bg-white">
	<table>
		<thead class="text-sm text-gray-500">
			<tr>
				<th>تاریخ</th>
				<th>شناسه</th>
				<th>افزایش مبلغ</th>
				<th>وضعیت پرداخت</th>
				<th>جزئیات</th>
				<th></th>
			</tr>
		</thead>
		<tbody class="text-black">
			<tr>
				<td>
					<div class="comment__date">
						<span class="comment__date-day">29</span>
						<span class="comment__date-month">اسفند</span>
					</div>
				</td>
				<td>30250</td>
				<td class="whitespace-nowrap"><span class="flex items-center gap-1"><span class="font-semibold">۱۰۰,۰۰۰</span><span class="text-sm">تومان</span></span></td>
				<td class="whitespace-nowrap">تکمیل شده</td>
				<td class="min-w-32">اعتبار کیف پول از طریق خرید #FFA-982530</td>
				<td class="min-w-32">
					<a class="btn btn--sm btn--brand btn--outline rounded-full" href="javascript:">پرداخت</a>
				</td>
			</tr>
		</tbody>
	</table>
</div>
