<script>
	import CommentItem from './CommentItem.svelte'
	import CommentForm from './CommentForm.svelte'
</script>

<div class="p-8 bg-white rounded">
	<h3 class="mb-3 font-bold">ارسال نظر جدید</h3>
	<CommentForm />
</div>

<div class="py-4"><hr class="border-gray-200"></div>

<div class="grid gap-4">
	<CommentItem />
	<CommentItem />
</div>
