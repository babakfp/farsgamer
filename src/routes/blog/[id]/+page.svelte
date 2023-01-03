<script>
	import { Description, Comments } from "$components/PostType"
	import { Tab, TabLabel, TabPanel } from "$components/Tab"
	export let data
</script>

<section class="max-w-2xl pt-4 mx-auto">
	<ul class="flex justify-end gap-4 text-gray-400 text-2xs 2xl:text-xs">
		<li>
			<span>تاریخ انتشار:</span>
			<span class="text-gray-500">{data.post.releaseDate}</span>
		</li>
		{#if data.post.modifyDate}
			<li>
				<span>تاریخ بروزرسانی:</span>
				<span class="text-gray-500">{data.post.modifyDate}</span>
			</li>
		{/if}
	</ul>

	<div class="relative mt-4 mb-5.5 mr-1.5">
		<img
			class="absolute rounded blur opacity-50"
			aria-hidden="true"
			src={data.post.featuredImage}
			alt={data.post.title}
		/>
		<img class="relative rounded" src={data.post.featuredImage} alt={data.post.title} />
	</div>

	<h1 class="px-4 mt-4 text-sm font-semibold dir-ltr text-gray-600 sm:text-base 2xl:text-lg">
		{data.post.title}
	</h1>
</section>

<Tab class="mt-8">
	<svelte:fragment slot="tab">
		<TabLabel title="توضیحات" hash="description" />
		<TabLabel title="نظرات" hash="comments" count={data.post.comments?.length} />
	</svelte:fragment>

	<svelte:fragment slot="body">
		<TabPanel class="py-8 px-6 sm:px-8 lg:py-20" hash="description">
			<div class="max-w-3xl mx-auto">
				<Description />
			</div>
		</TabPanel>
		<TabPanel class="!p-0 !bg-transparent" hash="comments">
			<Comments items={data.post.comments} canReply={true} />
		</TabPanel>
	</svelte:fragment>
</Tab>
