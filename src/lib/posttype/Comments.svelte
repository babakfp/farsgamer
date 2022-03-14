<script>
	import CommentItem from './CommentItem.svelte'
	import CommentForm from './CommentForm.svelte'
	import Alert from '$lib/Alert.svelte'
	export let items
</script>

<div class="p-8 bg-white rounded">
	<h3 class="mb-3 font-bold">ارسال نظر جدید</h3>
	<CommentForm />
</div>

<div class="py-4"><hr class="border-gray-200"></div>

{#if items?.length > 0}
	<div class="grid gap-4">
		{#each items as item (item.id)}
			<CommentItem {...item} />
		{/each}
	</div>
{:else}
	<Alert>هیچ موردی پیدا نشد.</Alert>
{/if}
