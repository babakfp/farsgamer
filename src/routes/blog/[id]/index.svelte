<script>
	import Breadcrumb from '$lib/Breadcrumb.svelte'
	import Description from '$lib/posttype/Description.svelte'
	import Comments from '$lib/posttype/Comments.svelte'
	import Taby from '$lib/Taby.svelte'
	import TabyTab from '$lib/TabyTab.svelte'
	import TabyBody from '$lib/TabyBody.svelte'

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

<Taby class="mt-8">
	<svelte:fragment slot="tab">
		<TabyTab>توضیحات</TabyTab>
		<TabyTab>
			<span>نظرات</span>
			{#if post.comments?.length > 0}
			<div class="text-sm font-normal"><span class="opacity-25">(</span>{post.comments.length}<span class="opacity-25">)</span></div>
			{/if}
		</TabyTab>
	</svelte:fragment>

	<svelte:fragment slot="body">
		<TabyBody class="p-8 lg:py-20">
			<div class="max-w-3xl mx-auto">
				<Description />
			</div>
		</TabyBody>
		<TabyBody class="!p-0 !bg-transparent">
			<Comments items={post.comments} />
		</TabyBody>
	</svelte:fragment>
</Taby>
