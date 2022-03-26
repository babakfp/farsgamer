<script>
	import Breadcrumb from '$lib/Breadcrumb.svelte'
	import Description from '$lib/posttype/Description.svelte'
	import Comments from '$lib/posttype/Comments.svelte'
	import { Tab, TabLabel, TabPanel } from '$lib/Tab'
	export let post
</script>

<Breadcrumb items={[['خانه', '/'], ['بلاگ', '/blog'], post.title]} />

<!-- Hero section -->
<section class="grid gap-4 mt-4 p-4 pb-6 bg-white rounded xs:flex xs:items-center xs:pb-4 md:rounded">
	<img class="w-full rounded xs:max-w-52" src={post.featuredImage} alt>

	<div class="grid gap-4 w-full px-4 lg:py-4">
		<h1 class="text-lg font-bold lg:text-2xl">{post.title}</h1>

		<ul class="list-inside list-disc space-y-1 text-gray-500 text-sm">
			<li>
				<span>تاریخ انتشار:</span>
				<span>{post.releaseDate}</span>
			</li>
			{#if post.modifyDate}
				<li>
					<span>تاریخ بروزرسانی:</span>
					<span>{post.modifyDate}</span>
				</li>
			{/if}
		</ul>
	</div>
</section>
<!--/ Hero section -->

<Tab class="mt-8">
	<svelte:fragment slot="tab">
		<TabLabel title="توضیحات" />
		<TabLabel title="نظرات" count={post.comments?.length} />
	</svelte:fragment>

	<svelte:fragment slot="body">
		<TabPanel class="p-8 lg:py-20">
			<div class="max-w-3xl mx-auto">
				<Description />
			</div>
		</TabPanel>
		<TabPanel class="!p-0 !bg-transparent">
			<Comments items={post.comments} />
		</TabPanel>
	</svelte:fragment>
</Tab>
