<script>
	import { onMount } from 'svelte'
	import Description from '$lib/posttype/Description.svelte'
	import Comments from '$lib/posttype/Comments.svelte'
	import CommentForm from '$lib/posttype/CommentForm.svelte'
	import QAACommentWithReply from './question-and-answer/QAACommentWithReply.svelte'
	import QAACommentForm from './question-and-answer/QAACommentForm.svelte'
	import Taby from '$lib/Taby.svelte'
	import TabyTab from '$lib/TabyTab.svelte'
	import TabyBody from '$lib/TabyBody.svelte'

	onMount(_=> {
		const posttypeContent = document.querySelector('.posttype-content')
		easyTab(posttypeContent)
	})
</script>

<Taby class="mt-8">
	<svelte:fragment slot="tab">
		<TabyTab>توضیحات</TabyTab>
		<TabyTab>
			<span>نظرات</span>
			<div class="text-sm font-normal"><span class="opacity-25">(</span>۹۸<span class="opacity-25">)</span></div>
		</TabyTab>
		<TabyTab>پرسش و پاسخ</TabyTab>
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
		<TabyBody class="!p-0 !bg-transparent">
			<div class="p-8 bg-white rounded">
				<h3 class="mb-3 font-bold">ارسال پرسش جدید</h3>
				<CommentForm isForQuestion={true} />
			</div>
			<div class="py-4"><hr class="border-gray-200"></div>
			<QAACommentWithReply />
		</TabyBody>
	</svelte:fragment>
</Taby>
