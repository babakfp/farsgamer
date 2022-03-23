<script>
	import Gallery from './_lib/Gallery.svelte'
	import Info from './_lib/Info.svelte'
	import PurchaseForm from './_lib/PurchaseForm.svelte'
	import BestSellerProducts from '$lib/home/BestSellerProducts.svelte'
	
	// Content
	import { onMount } from 'svelte'
	import Description from '$lib/posttype/Description.svelte'
	import Comments from '$lib/posttype/Comments.svelte'
	import CommentForm from '$lib/posttype/CommentForm.svelte'
	import Taby from '$lib/Taby.svelte'
	import TabyTab from '$lib/TabyTab.svelte'
	import TabyBody from '$lib/TabyBody.svelte'

	export let product
</script>

<svelte:head>
	<title>عنوان محصول</title>
</svelte:head>

<section class="md:flex md:items-center">
	<Gallery images={product.images} />
	<Info title={product.title} rating={product.rating} ratingCount={product.ratingCount} coins={product.coins} />
</section>

<PurchaseForm />

<!-- Content -->
<Taby class="mt-8">
	<svelte:fragment slot="tab">
		<TabyTab title="توضیحات" />
		<TabyTab title="نظرات" count={product.comments?.length} />
		<TabyTab title="پرسش و پاسخ" count={product.questionsAndAnswers?.length} />
	</svelte:fragment>

	<svelte:fragment slot="body">
		<TabyBody class="p-8 lg:py-20">
			<div class="max-w-3xl mx-auto">
				<Description />
			</div>
		</TabyBody>
		<TabyBody class="!p-0 !bg-transparent">
			<Comments items={product.comments} />
		</TabyBody>

		<TabyBody class="!p-0 !bg-transparent">
			<Comments items={product.questionsAndAnswers} headingTitle="ارسال پرسش جدید" canReply={false} />
		</TabyBody>
	</svelte:fragment>
</Taby>

<div class="mt-8 xl:mt-12">
	<BestSellerProducts />
</div>
