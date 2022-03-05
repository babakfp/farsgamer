<script>
	import Breadcrumb from '$lib/Breadcrumb.svelte'
	import Description from '$lib/posttype/Description.svelte'
	import Comment from './_lib/Comment.svelte'
	import CommentForm from '$lib/posttype/CommentForm.svelte'
</script>

<Breadcrumb items={[['خانه', '/'], ['محصولات', '/shop'], ['پک فورست لجند | Forst Legends pack']]} />

<div class="grid gap-4 mt-4 p-4 pb-6 bg-white rounded-t xs:flex xs:items-center xs:pb-4">
	<img class="w-full rounded xs:max-w-52" src="/img/post.png" alt>
	
	<div class="grid gap-4 w-full text-center lg:py-4">
		<h1 class="text-lg font-bold lg:text-2xl">آموزش لینک کردن Play Station به Epic Games</h1>
		
		<div class="text-gray-500 text-sm">
			<span>تاریخ:</span>
			<span>14 مهر 1399</span>
		</div>
	</div>
</div>

<div class="rounded-b border-t-2 border-dashed border-gray-300">
	<Description />
</div>

<h2 class="mt-12 font-bold text-lg">نظرات کاربران</h2>
<div class="grid gap-4 mt-4">
	<CommentForm />
	<div class="py-4"><hr></div>

	<div class="grid gap-2">
		<Comment />
		<Comment />
	</div>
</div>
