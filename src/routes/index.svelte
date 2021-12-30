<script>
	import Posters from '$lib/home/Posters.svelte'
	import BestSellerProducts from '$lib/home/BestSellerProducts.svelte'
	import GiftCards from '$lib/home/GiftCards.svelte'
	import UserComments from '$lib/home/UserComments.svelte'
</script>

<svelte:head>
	<title>فارسگیمر - اولین مرجع رسمی فروش بازی های آنلاین</title>
</svelte:head>

<div class="space-y-8 lg:space-y-12">
	<Posters />
	<!-- <%- include(components + "home/triple-posters.ejs") %> -->
	<BestSellerProducts />
	<GiftCards />
	<UserComments />
</div>

<!-- <%- include(components + "home/physical-products.ejs") %> -->
<!-- <%- include(components + "home/social.ejs") %> -->
<!-- <%- include(components + "home/images.ejs") %> -->
<!-- <%- include(components + "home/posts-slider.ejs") %> -->
<!-- <%- include(components + "footer.ejs") %> -->
