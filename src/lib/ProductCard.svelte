<script>
	import ProductPrice from './ProductPrice.svelte'
</script>

<div class="rounded-xl overflow-hidden bg-white grid justify-center items-end">
  
  <a href="/single-product">
    <!-- If in stock -->
    <img class="w-full" src="/images/product-1.jpg" alt="گیف کارد 20 دلاری استیم">
    
    <!-- If not in stock -->
    <!-- <div class="relative overflow-hidden">
      <img class="w-full" src="/images/product-grid.png"> -->
      <!-- Over Layer -->
      <!-- <div class="bg-gray-700 bg-opacity-70 absolute inset-0 flex items-center justify-center">
        <p class="text-white font-medium">موجود نیست</p>
      </div>
    </div> -->
  </a>
		
	<div class="text-center">
		<a href="/single-product">
			<h3 class="js-truncate-product-title text-center overflow-hidden text-gray-700 pt-3 px-4 font-semibold h-16 leading-5">گیف کارد 20 دلاری استیم</h3>
		</a>
	
		<p class="text-center text-gray2-700 text-sm mb-0.5 max-h-5 overflow-hidden px-4">Fortnite</p>
	
		<!-- Price -->
		<ProductPrice />
	
		<div class="flex justify-center border-t border-gray-200 py-3 mt-2">
			<a class="btn btn-brand inline-flex items-center justify-center gap-2 p-2 px-4 bg-new-blue text-white rounded-full" href="#">
				<i class="icon-basket"></i>
				<span class="text-sm">جزئیات محصول</span>
			</a>
		</div>
	</div>
</div>
