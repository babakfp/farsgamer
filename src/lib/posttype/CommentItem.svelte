<script>
	import StarRating from '$lib/StarRating.svelte'
	import CommentForm from '$lib/posttype/CommentForm.svelte'
	
	export let id
	export let firstname
	export let lastname
	export let date
	export let content
	
	let showResponseForm = false
</script>

<div class="relative p-4 pb-3 bg-white rounded text-sm" {id}>
	<div class="p-2 leading-6">{content}</div>

	{#if showResponseForm}
		<div class="mt-2 pb-2">
			<CommentForm useSmall={true} />
		</div>
	{/if}

	<hr class="border-gray-100 border-dashed -mx-4 mt-2 pt-3">

	<div class="flex items-center justify-between">
		<div class="flex items-center gap-4">
			<span class="text-gray-500">{firstname} {lastname}</span>
			<span class="w-0.5 h-0.5 bg-gray-300 rounded-full"></span>
			<span class="text-xs text-gray-400">{date}</span>
		</div>
		
		<button class="btn btn--light {showResponseForm && 'btn--outline'} btn--xs" on:click={_=> showResponseForm = !showResponseForm}>
			{showResponseForm ? 'صرف' : 'ارسال'} نظر
		</button>
	</div>
</div>
