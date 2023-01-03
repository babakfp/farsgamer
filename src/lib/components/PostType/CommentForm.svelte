<script>
	import Alert from "$components/Alert.svelte"
	export let sm = false
	export let isQuestion = false
</script>

<form class="grid justify-items-start {sm ? 'gap-2' : 'gap-4'}">
	<textarea
		class="input placeholder:text-sm"
		rows="4"
		placeholder="{isQuestion ? 'سوال' : 'نظر'} خود را اینجا بنویسید..."
	/>
	<button class="btn btn--brand px-12 text-sm">{isQuestion ? "ارسال پرسش" : "ارسال نظر"}</button>
</form>

<!-- <Alert class="mt-4" type="success">نظر شما با موفقیت ارسال شد🎉.</Alert> -->
