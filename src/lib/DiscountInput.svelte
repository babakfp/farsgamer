<script>
	export let wrapperClass = ''
	let value = ''
</script>

<div class="relative text-sm {wrapperClass}">
	<input class="input pl-32 {value && 'dir-ltr'}" type="text" bind:value placeholder="کد تخفیف">
	<button class="btn btn--brand btn--outline bg-white absolute top-1 left-1 w-28">اعمال تخفیف</button>
</div>
