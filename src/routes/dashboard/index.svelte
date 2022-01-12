<div class="p-4 bg-gray-50 rounded">


  <div class="grid grid-cols-2 gap-4 border-b border-gray-200 pb-4 mb-4 xl:flex xl:justify-between xl:items-center xl:border-0">

    <div class="flex items-center gap-2">
      <i class="icon-wallet text-xl text-gray-900 w-10 h-10 flex items-center justify-center rounded bg-yellow"></i>
      <h1>موجودی کیف پول:</h1>
    </div>

    <p class="flex items-center gap-1 justify-end text-brand">
      <span class="text-lg font-bold tracking-tighter">500,000</span>
      <span class="text-sm">تومان</span>
    </p>

		<form class="col-span-full w-full xl:max-w-88">
			<div class="relative">
				<input class="input text-sm w-full" type="number" placeholder="مبلغ مورد نظر خود را وارد کنید">
				<button class="btn btn--brand absolute top-0 bottom-0 left-0" type="submit">شارژ کیف پول</button>
			</div>
			<!-- Error -->
			<!-- <small class="text-red-400">مبلغ نمی‌تواند کمتر از <b class="tracking-tighter">۱۰,۰۰۰</b> تومان باشد.</small> -->
		</form>

  </div>


  <!-- Data Table -->
  <div class="table-wrapper">
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

  
</div>