<script>
	import StarRating from '$lib/StarRating.svelte'
	import CommentForm from '$lib/posttype/CommentForm.svelte'
	let showResponseForm = false
</script>

<div class="relative p-4 pb-3 bg-white rounded text-sm">
	<p class="p-4 line-clamp-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.<p>
	
	{#if showResponseForm}
		<div class="mt-2">
			<CommentForm />
		</div>
	{/if}

	<hr class="border-gray-100 -mx-4 mt-4 pt-3 ">

	<div class="flex items-center justify-between">
		<span>علیرضا خانی</span>
		<button class="btn btn--light {showResponseForm && 'btn--outline'} btn--xs" on:click={_=> showResponseForm = !showResponseForm}>
			{showResponseForm ? 'صرف' : 'ارسال'} نظر
		</button>
	</div>
</div>
