<script>
	import Gallery from './_lib/Gallery.svelte'
	import Info from './_lib/Info.svelte'
	import PurchaseForm from './_lib/PurchaseForm.svelte'

	import CardsSection from '$components/CardsSection.svelte'
	import ProductCardSwiper from '$components/ProductCardSwiper.svelte'
	
	// Content
	import { onMount } from 'svelte'
	import Description from '$components/posttype/Description.svelte'
	import Comments from '$components/posttype/Comments.svelte'
	import CommentForm from '$components/posttype/CommentForm.svelte'
	import { Tab, TabLabel, TabPanel } from '$components/Tab'

	export let data
</script>

<svelte:head>
	<title>عنوان محصول</title>
</svelte:head>

<section class="md:flex md:items-center">
	<Gallery images={data.product.images} />
	<Info title={data.product.title} rating={data.product.rating} ratingCount={data.product.ratingCount} coins={data.product.coins} />
</section>

<PurchaseForm {data} />

<!-- Content -->
<Tab class="mt-8">
	<svelte:fragment slot="tab">
		<TabLabel title="توضیحات" hash="description" />
		<TabLabel title="نظرات" hash="comments" count={data.product.comments?.length} />
		<TabLabel title="پرسش و پاسخ" hash="question-and-answer" count={data.product.questionsAndAnswers?.length} />
	</svelte:fragment>

	<svelte:fragment slot="body">
		<TabPanel class="p-8 lg:py-20" hash="description">
			<div class="max-w-3xl mx-auto">
				<Description />
			</div>
		</TabPanel>
		<TabPanel class="!p-0 !bg-transparent" hash="comments">
			<Comments items={data.product.comments} />
		</TabPanel>
		<TabPanel class="!p-0 !bg-transparent" hash="question-and-answer">
			<Comments items={data.product.questionsAndAnswers} headingTitle="ارسال پرسش جدید" canReply={false} isQuestion={true} />
		</TabPanel>
	</svelte:fragment>
</Tab>

<div class="mt-8 xl:mt-12">
	<CardsSection title="محصولات مرتبط">
		<ProductCardSwiper />
	</CardsSection>
</div>
