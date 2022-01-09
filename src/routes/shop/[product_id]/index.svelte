<script>
	import Breadcrumb from '$lib/Breadcrumb.svelte'
	import ImageGallery from './lib/ImageGallery.svelte'
	import Info from './lib/Info.svelte'
	import PurchaseForm from './lib/PurchaseForm.svelte'
	// import PosttypeContent from './lib/PosttypeContent.svelte'
	// import BestSellerProducts from '$lib/home/BestSellerProducts.svelte'
</script>

<div class="relative -mx-4 overflow-hidden">
	<img class="w-full" src="/images/single-product-poster.png" alt>
	<div class="poster-overlayer absolute inset-0"></div>
</div>





<!-- <Breadcrumb /> -->

<!-- START Hero -->
<section class="overflow-hidden rounded-2xl bg-white pb-4 lg:pb-12">
  
	<!-- Poster -->
  

  <div class="px-4 max-w-3xl mt-8 mx-auto sm:mt-4 md:mt-0 lg:-mt-16 lg:items-center xl:-mt-20 2xl:-mt-24 2xl:max-w-4xl">
    <div class="grid gap-8 lg:gap-0 xl:flex xl:gap-8">
      <div>
				<ImageGallery />
			</div>

      <Info />
    </div>

		<PurchaseForm />
  </div>

</section>
<!-- END Hero -->
<!-- <BestSellerProducts /> -->
<!-- <PosttypeContent /> -->

<style lang="postcss">
	/* :global(#main) {
		@apply !mt-16 lg:!mt-28;
	} */
	.poster-overlayer {
		background: linear-gradient(0deg, rgba(255, 255, 255, 1) 1%, rgba(255,255,255,0.4) 100%);
	}
</style>
