<script>
	import StarRating from "$components/StarRating.svelte"
	import { CommentForm } from "./index.js"

	export let id
	export let firstname
	export let lastname
	export let date
	export let content
	export let rating = null
	export let isBuyer = false
	export let canReply = true
	export let answer = null

	let showResponseForm = false
</script>

<div class="relative p-4 pb-3 bg-white rounded text-sm" {id}>
	<div class="leading-6">{content}</div>

	{#if answer}
		<div class="mt-4 -mb-2 -mx-4 p-4 bg-gray-100">
			<div class="flex justify-between text-xs text-gray-500">
				<span>جواب از طرف پشتیبانی</span>
				<span>{answer.date}</span>
			</div>
			<p class="mt-4">{answer.content}</p>
		</div>
	{/if}

	{#if showResponseForm}
		<div class="mt-4 -mb-2 -mx-4 p-4 bg-gray-50">
			<CommentForm sm={true} />
		</div>
	{/if}

	<hr class="border-gray-100 border-dashed -mx-4 mt-2 pt-3" />

	<div class="flex items-center justify-between gap-2 whitespace-nowrap 4xs:gap-4">
		<div class="flex flex-wrap items-center gap-2 w-full text-gray-500 text-xs">
			<span>{firstname} {lastname}</span>

			{#if isBuyer}
				<span class="py-1 px-2 bg-gray-50 rounded text-gray-600 text-2xs">خریدار</span>
			{/if}
			{#if rating}
				<div class={canReply && "absolute -right-1.5 top-4 sm:-right-4 sm:top-2"}>
					<StarRating {rating} vertical={true} />
				</div>
			{/if}

			<span class="mr-auto">{date}</span>
		</div>

		{#if canReply}
			<button
				class="btn btn--light {showResponseForm && 'btn--outline'} btn--xs -ml-1"
				on:click={() => (showResponseForm = !showResponseForm)}
			>
				{showResponseForm ? "صرف" : "ارسال"} نظر
			</button>
		{/if}
	</div>
</div>
