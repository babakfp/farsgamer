<script>
	import StarRating from '$lib/StarRating.svelte'
	import CommentForm from '$lib/posttype/CommentForm.svelte'
	let showResponseForm = false
</script>

<div class="relative p-4 pb-3 bg-white rounded text-sm">
	<div class="p-2 leading-6">
		لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
	</div>
	
	{#if showResponseForm}
		<div class="mt-2">
			<CommentForm />
		</div>
	{/if}

	<hr class="border-gray-100 border-dashed -mx-4 mt-2 pt-3">

	<div class="flex items-center justify-between">
		<span>علیرضا خانی</span>
		<button class="btn btn--light {showResponseForm && 'btn--outline'} btn--xs" on:click={_=> showResponseForm = !showResponseForm}>
			{showResponseForm ? 'صرف' : 'ارسال'} نظر
		</button>
	</div>
</div>
