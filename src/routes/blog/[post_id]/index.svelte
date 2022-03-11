<script>
	import Breadcrumb from '$lib/Breadcrumb.svelte'
	import Description from '$lib/posttype/Description.svelte'
	import Comments from '$lib/posttype/Comments.svelte'
	import Taby from '$lib/Taby.svelte'
	import TabyTab from '$lib/TabyTab.svelte'
	import TabyBody from '$lib/TabyBody.svelte'
</script>

<Breadcrumb items={[['خانه', '/'], ['بلاگ', '/blog'], ['پک فورست لجند | Forst Legends pack']]} />

<!-- Hero section -->
<section class="grid gap-4 mt-4 p-4 pb-6 bg-white rounded-t xs:flex xs:items-center xs:pb-4 md:rounded">
	<img class="w-full rounded xs:max-w-52" src="/img/post.png" alt>

	<div class="grid gap-4 w-full px-4 text-center lg:py-4">
		<h1 class="text-lg font-bold lg:text-2xl">آموزش لینک کردن Play Station به Epic Games</h1>

		<div class="text-gray-500 text-sm">
			<span>تاریخ:</span>
			<span>14 مهر 1399</span>
		</div>
	</div>
</section>
<!--/ Hero section -->

<Taby class="mt-8">
	<svelte:fragment slot="tab">
		<TabyTab>توضیحات</TabyTab>
		<TabyTab>
			<span>نظرات</span>
			<div class="text-sm font-normal"><span class="opacity-25">(</span>۹۸<span class="opacity-25">)</span></div>
		</TabyTab>
	</svelte:fragment>

	<svelte:fragment slot="body">
		<TabyBody class="p-8 lg:py-20">
			<div class="max-w-3xl mx-auto">
				<Description />
			</div>
		</TabyBody>
		<TabyBody class="!p-0 !bg-transparent">
			<Comments />
		</TabyBody>
	</svelte:fragment>
</Taby>
