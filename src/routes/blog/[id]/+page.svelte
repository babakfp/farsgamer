<script>
	import Breadcrumb from '$components/Breadcrumb.svelte'
	import { Description, Comments } from '$components/PostType'
	import { Tab, TabLabel, TabPanel } from '$components/Tab'
	export let data
</script>

<Breadcrumb items={[['خانه', '/'], ['بلاگ', '/blog'], data.post.title]} />

<!-- Hero section -->
<section class="grid gap-4 mt-4 p-4 pb-6 bg-white rounded xs:flex xs:items-center xs:pb-4 md:rounded">
	<img class="w-full rounded xs:max-w-52" src={data.post.featuredImage} alt>

	<div class="grid gap-4 w-full px-4 lg:py-4">
		<h1 class="text-lg font-bold lg:text-2xl">{data.post.title}</h1>

		<ul class="list-inside list-disc space-y-1 text-gray-500 text-sm">
			<li>
				<span>تاریخ انتشار:</span>
				<span>{data.post.releaseDate}</span>
			</li>
			{#if data.post.modifyDate}
				<li>
					<span>تاریخ بروزرسانی:</span>
					<span>{data.post.modifyDate}</span>
				</li>
			{/if}
		</ul>
	</div>
</section>
<!--/ Hero section -->

<Tab class="mt-8">
	<svelte:fragment slot="tab">
		<TabLabel title="توضیحات" hash="description" />
		<TabLabel title="نظرات" hash="comments" count={data.post.comments?.length} />
	</svelte:fragment>

	<svelte:fragment slot="body">
		<TabPanel class="p-8 lg:py-20" hash="description">
			<div class="max-w-3xl mx-auto">
				<Description />
			</div>
		</TabPanel>
		<TabPanel class="!p-0 !bg-transparent" hash="comments">
			<Comments items={data.post.comments} canReply={true} />
		</TabPanel>
	</svelte:fragment>
</Tab>
