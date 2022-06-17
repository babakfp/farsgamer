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
	<div class="leading-6">{content}</div>

	{#if showResponseForm}
		<div class="mt-3 -mb-2 -mx-4 p-4 bg-gray-50">
			<CommentForm sm={true} />
		</div>
	{/if}

	<hr class="border-gray-100 border-dashed -mx-4 mt-2 pt-3">

	<div class="flex items-center justify-between gap-2 whitespace-nowrap 4xs:gap-4">
		<div class="flex flex-wrap items-center gap-2 text-gray-500 text-xs 4xs:gap-4">

      <span>{firstname} {lastname}</span>

      {#if isBuyer}
        <span class="py-0.5 px-2 bg-gray-100 rounded text-gray-600">خریدار</span>
      {/if}

			{#if rating}
				<StarRating {rating} dirLtr={false} />
			{/if}

			<span class="mr-1">{date}</span>
		</div>
		
		{#if canReply}
			<button class="btn btn--light {showResponseForm && 'btn--outline'} btn--xs -ml-1" on:click={_=> showResponseForm = !showResponseForm}>
				{showResponseForm ? 'صرف' : 'ارسال'} نظر
			</button>
		{/if}
	</div>
</div>
