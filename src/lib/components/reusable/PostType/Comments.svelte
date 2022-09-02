<script>
	import { CommentForm, CommentItem } from './index.js'
	import Alert from '$components/Alert.svelte'
	export let items
	export let canReply = false
	export let isQuestion = false
	export let headingTitle = 'ارسال نظر جدید'
</script>

<div class="p-8 bg-white rounded">
	<h3 class="mb-3 font-bold">{headingTitle}</h3>
	<CommentForm {isQuestion} />
</div>

<div class="py-4"><hr class="border-gray-200"></div>

{#if items?.length > 0}
	<div class="grid gap-4">
		{#each items as item (item.id)}
			<CommentItem {...item} {canReply} />
		{/each}
	</div>
{:else}
	<Alert>هیچ موردی پیدا نشد.</Alert>
{/if}
