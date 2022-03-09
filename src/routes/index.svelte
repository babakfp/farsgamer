<script>
	import Posters from '$lib/home/Posters.svelte'
	import BestSellerProducts from '$lib/home/BestSellerProducts.svelte'
	import GiftCards from '$lib/home/GiftCards.svelte'
	import UserComments from '$lib/home/UserComments.svelte'
	import SpecialDiscounts from '$lib/home/SpecialDiscounts.svelte'
	import ContentSection from '$lib/ContentSection.svelte'
	import NewPosts from '$lib/home/NewPosts.svelte'
	import ImgShadowSelf from '$lib/ImgShadowSelf.svelte'
</script>

<svelte:head>
	<title>فارسگیمر - اولین مرجع رسمی فروش بازی های آنلاین</title>
</svelte:head>

<div class="space-y-8 lg:space-y-12">
	<Posters />
	<BestSellerProducts />
	<GiftCards />
	<UserComments />
	
	<section class="grid gap-4 sm:grid-cols-2">
		<a class="flex" href="javascript:">
			<img class="w-full rounded" src="/img/home/poster-half-width (1).png" alt>
		</a>
		<a class="flex" href="javascript:">
			<img class="w-full rounded" src="/img/home/poster-half-width (2).png" alt>
		</a>
	</section>

	<SpecialDiscounts />

	<a class="flex hover:opacity-90" href="javascript:">
		<img class="rounded" src="/img/home/poster-full-width (1).png" alt>
	</a>

	<div class="flex justify-center gap-4">
		<ImgShadowSelf class="max-w-64" src="/img/home/social-media-telegram.png" alt="فارسگیمر در تلگرام" />
		<ImgShadowSelf class="max-w-64" src="/img/home/social-media-instagram.png" alt="فارسگیمر در اینستاگرام" />
	</div>

	<NewPosts />

	<section class="grid grid-cols-2 gap-4 sm:grid-cols-4">
		<ImgShadowSelf src="/img/home/poster-1-4-width (1).png" />
		<ImgShadowSelf src="/img/home/poster-1-4-width (2).png" />
		<ImgShadowSelf src="/img/home/poster-1-4-width (3).png" />
		<ImgShadowSelf src="/img/home/poster-1-4-width (4).png" />
	</section>

	<a class="flex hover:opacity-90" href="javascript:">
		<img class="rounded" src="/img/home/poster-full-width (2).png" alt>
	</a>

</div>
