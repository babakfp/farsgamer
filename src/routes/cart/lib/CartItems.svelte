<div class="table-wrapper">
	<table>
		<thead class="mb-4 text-sm">
			<tr class="text-gray-500">
				<!-- 1 -->
				<th>محصول</th>
				<!-- 2 -->
				<th></th>
				<!-- 3 -->
				<th class="min-w-20">قیمت</th>
				<!-- 4 -->
				<th>تعداد</th>
				<!-- 5 -->
				<th>جمع جزء</th>
				<!-- 6 -->
				<th>حذف</th>
			</tr>
		</thead>
		<tbody>

			<!--
				START LOOP
				Hi back-end developer.
				You need to start the loop from hire
			-->

			<!-- this is just a spacer. don't remove it -->
			<tr class="h-2 last:h-0"></tr>
			
			<!-- the table main content - cart content - products in the cart -->
			<tr class="border-0">

				<!-- 1 - Product Image -->
				<td class="bg-gray-50 rounded-r-2xl w-28 h-28 py-4">
					<img class="rounded min-w-28 min-h-28" src="/images/product-grid.png">
				</td>

				<!-- 2 - Product Info -->
				<td class="bg-gray-50 py-4">

					<!-- Title -->
					<h3 class="font-semibold mb-2 text-sm">بتل پس چپتر 2 سیزن 5</h3>
					
					<ul class="text-sm whitespace-nowrap">
						<li class="flex gap-1">
							<span>نوع اکانت:</span>
							<span class="font-medium">اپیک گیمز</span>
						</li>
						<li class="flex gap-1">
							<span>ایمیل:</span>
							<span class="font-medium">mostafa.021g@gmail.com</span>
						</li>
						<li class="flex gap-1">
							<span>رمز:</span>
							<span class="font-medium">1234</span>
						</li>
						<li class="flex gap-1">
							<span>مایل به دریافت سریع تر:</span>
							<span class="font-medium">بلی</span>
						</li>
					</ul>

				</td>

				<!-- 3 - Product Price -->
				<td class="bg-gray-50 py-4">
					<div class="flex items-center gap-1 whitespace-nowrap">
						<p class="text-lg font-semibold">100,000</p>
						<p class="text-sm">تومان</p>
					</div>
				</td>

				<!-- 4 - Quantity -->
				<td class="bg-gray-50 py-4">
					<input class="input w-16 h-10 bg-white" type="number" name="quantity" id="quantity" min="1" max="10" value="1">
				</td>

				<!-- 5 - Product Total Price -->
				<td class="bg-gray-50 py-4">
					<div class="flex items-center gap-1 whitespace-nowrap">
						<p class="text-lg font-semibold">100,000</p>
						<p class="text-sm">تومان</p>
					</div>
				</td>

				<!-- 6 - Remove the product from the cart -->
				<td class="bg-gray-50 rounded-l-2xl py-4">
					<a href="" class="text-red hover:text-opacity-70 focus:text-opacity-70 transition-colors duration-200">
						<i class="icon-cancel"></i>
					</a>
				</td>

			</tr>

			<!--
				START LOOP
				and end it here :)
			-->

		</tbody>
	</table>
</div>