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
	import { Tab, TabLabel, TabPanel } from 'Tab'

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
<Tab class="mt-8">
	<svelte:fragment slot="tab">
		<TabLabel title="توضیحات" />
		<TabLabel title="نظرات" count={product.comments?.length} />
		<TabLabel title="پرسش و پاسخ" count={product.questionsAndAnswers?.length} />
	</svelte:fragment>

	<svelte:fragment slot="body">
		<TabPanel class="p-8 lg:py-20">
			<div class="max-w-3xl mx-auto">
				<Description />
			</div>
		</TabPanel>
		<TabPanel class="!p-0 !bg-transparent">
			<Comments items={product.comments} />
		</TabPanel>

		<TabPanel class="!p-0 !bg-transparent">
			<Comments items={product.questionsAndAnswers} headingTitle="ارسال پرسش جدید" canReply={false} isQuestion={true} />
		</TabPanel>
	</svelte:fragment>
</Tab>

<div class="mt-8 xl:mt-12">
	<BestSellerProducts />
</div>
