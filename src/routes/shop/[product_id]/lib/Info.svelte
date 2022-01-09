<script>
	import StarRating from '$lib/StarRating.svelte'
</script>

<div class="lg:z-0 lg:grid lg:items-start lg:text-sm">
  <div>
    
    <!-- Title -->
    <h1 class="font-bold text-xl mb-2 sm:text-2xl lg:text-xl">پک فورست لجند | Forst Legends pack</h1>
    
    <!-- Rating -->
    <div class="flex items-center gap-2">
			<StarRating />
      <span class="text-sm">(از 450 کاربر)</span>
    </div>

    <ul class="mt-6 space-y-2">
      <li>
        <svg class="w-6 h-6 inline-block"><use xlink:href="#svg-gem-red-sporkel"></use></svg>
        <span class="mr-1">شما با خرید این محصول <strong>0</strong> امتیاز دریافت میکنید</span>
      </li>
      <!-- Not needed -->
      <!-- <li>
        <svg class="w-5 h-5 inline-block"><use xlink:href="#svg-gem-blue"></use></svg>
        <span class="mr-1">شما با خرید این محصول <strong>0</strong> امتیاز دریافت میکنید</span>
      </li>
      <li>
        <svg class="w-5 h-5 inline-block"><use xlink:href="#svg-gem-green"></use></svg>
        <span class="mr-1">شما با خرید این محصول <strong>0</strong> امتیاز دریافت میکنید</span>
      </li>
      <li>
        <svg class="w-5 h-5 inline-block"><use xlink:href="#svg-gem-greener"></use></svg>
        <span class="mr-1">شما با خرید این محصول <strong>0</strong> امتیاز دریافت میکنید</span>
      </li>
      <li>
        <svg class="w-5 h-5 inline-block"><use xlink:href="#svg-gem-yellow"></use></svg>
        <span class="mr-1">شما با خرید این محصول <strong>0</strong> امتیاز دریافت میکنید</span>
      </li> -->
      <li><p><span class="text-gray2-700">زمان تحویل محصول:</span> 60 دقیقه الی 5 ساعت کاری</p></li>
      <!-- <li>
        <p class="text-gray2-700">پلتفرم های قابل استفاده از این محصول:</p>
        <ul class="flex items-center gap-4 flex-wrap">
          <li>
            <img src="/svg/ps4.svg">
          </li>
        </ul>
      </li> -->
      <li><p class="text-red text-sm">با خرید این محصول پک سامورایی + 1000 ویباکس (با انجام چلنج ها)برای اکانت شما فعال خواهد شد.</p></li>
    </ul>

  </div>
</div>