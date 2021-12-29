<script>
	import MainPosters from '$lib/home/MainPosters.svelte'
	import SecondPosters from '$lib/home/SecondPosters.svelte'
	import ProductCard from '$lib/ProductCard.svelte'
</script>

<svelte:head>
	<title>فارسگیمر - اولین مرجع رسمی فروش بازی های آنلاین</title>
</svelte:head>

<section class="md:flex md:gap-4">
	<div class="md:w-8/12">
		<MainPosters />
	</div>
	<div class="grid justify-center items-baseline gap-4 mt-4 xs:flex md:grid md:w-auto md:mt-0">
		<!-- <SecondPosters /> -->
	</div>
</section>

<section>

  <div class="flex items-center justify-between mb-4 mt-8 lg:mb-6 lg:mt-10">
    <div class="flex gap-2 items-center">
      <img class="w-6 h-6" src="/svg/fire.svg" alt="آتش">
      <h2 class="font-bold text-lg">پرفروش‌های فارس گیمر</h2>
    </div>
    <a class="flex gap-2 items-center" href="javascript:">
      <span class="text-sm lg:text-base">مشاهده همه</span>
      <i class="icon-angle-left text-xl"></i>
    </a>
  </div>

  <!-- Slider -->
  <div class="basic-product-slider swiper-container relative pb-8">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <ProductCard />
      </div>
    </div>

    <!-- Slider Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>

    <!-- Slider Pagination -->
    <div class="swiper-pagination bottom-0"></div>
  </div>

</section>

<!-- <%- include(components + "home/triple-posters.ejs") %> -->
<!-- <%- include(components + "home/giftcards.ejs") %> -->
<!-- <%- include(components + "home/customers-review.ejs") %> -->
<!-- <%- include(components + "home/physical-products.ejs") %> -->
<!-- <%- include(components + "home/social.ejs") %> -->
<!-- <%- include(components + "home/images.ejs") %> -->
<!-- <%- include(components + "home/posts-slider.ejs") %> -->
<!-- <%- include(components + "footer.ejs") %> -->
