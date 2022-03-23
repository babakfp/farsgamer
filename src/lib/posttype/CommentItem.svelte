<script>
	import StarRating from '$lib/StarRating.svelte'
	import CommentForm from '$lib/posttype/CommentForm.svelte'
	
	export let id
	export let firstname
	export let lastname
	export let date
	export let content
	export let rating = null
	export let isBuyer = false
	export let canReply = true

	let showResponseForm = false
</script>

<div class="relative p-4 pb-3 bg-white rounded text-sm" {id}>
	<div class="p-2 leading-6">{content}</div>

	{#if showResponseForm}
		<div class="mt-2 -mb-2 -mx-4 p-4 bg-gray-50">
			<CommentForm sm={true} />
		</div>
	{/if}

	<hr class="border-gray-100 border-dashed -mx-4 mt-2 pt-3">

	<div class="flex items-center justify-between">
		<div class="flex items-center gap-4">

			<div class="flex gap-2 text-gray-500">
				<span>{firstname} {lastname}</span>
			
				{#if isBuyer}
					<span class="py-0.5 px-2 bg-gray-100 rounded text-xs">خریدار</span>
				{/if}
			</div>

			{#if rating}
				<StarRating {rating} />
			{/if}

			<span class="w-0.5 h-0.5 bg-gray-300 rounded-full"></span>
			
			<span class="text-xs text-gray-400">{date}</span>
		</div>
		
		{#if canReply}
			<button class="btn btn--light {showResponseForm && 'btn--outline'} btn--xs" on:click={_=> showResponseForm = !showResponseForm}>
				{showResponseForm ? 'صرف' : 'ارسال'} نظر
			</button>
		{/if}
	</div>
</div>
