<script>
	import Alert from '$lib/Alert.svelte'
	export let useSmall = false
	export let isForQuestion = false
</script>

<form class="grid {useSmall ? 'gap-2' : 'gap-4'} justify-items-start">
	<textarea class="input placeholder:text-sm" rows="4" placeholder={isForQuestion ? 'سوال خود را اینجا بنویسید...' : 'نظر خود را اینجا بنوسید...'}></textarea>
	<button class="btn btn--brand {useSmall && 'btn--sm text-xs'}">{isForQuestion ? 'ارسال پرسش' : 'ارسال نظر'}</button>
</form>

<!-- <Alert class="mt-4" type="success" content="نظر شما با موفقیت ارسال شد🎉." /> -->
