<script>
	import Breadcrumb from '$lib/Breadcrumb.svelte'
	import Description from '$lib/posttype/Description.svelte'
	import Comments from '$lib/posttype/Comments.svelte'
	import Hero from './_lib/Hero.svelte'
	import Taby from '$lib/Taby.svelte'
	import TabyTab from '$lib/TabyTab.svelte'
	import TabyBody from '$lib/TabyBody.svelte'
</script>

<Breadcrumb items={[['خانه', '/'], ['محصولات', '/shop'], ['پک فورست لجند | Forst Legends pack']]} />
<Hero />

<Taby class="mt-8">
	<svelte:fragment slot="tab">
		<TabyTab>توضیحات</TabyTab>
		<TabyTab>
			<span>نظرات</span>
			<div class="text-sm font-normal"><span class="opacity-25">(</span>۹۸<span class="opacity-25">)</span></div>
		</TabyTab>
	</svelte:fragment>

	<svelte:fragment slot="body">
		<TabyBody class="p-8">
			<div class="max-w-3xl mx-auto">
				<Description />
			</div>
		</TabyBody>
		<TabyBody class="!p-0 !bg-transparent">
			<Comments />
		</TabyBody>
	</svelte:fragment>
</Taby>
