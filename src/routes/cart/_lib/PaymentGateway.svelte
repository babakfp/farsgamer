<script>
	export let title
	export let description
	export let src
	export let id
	export let value
	export let checked = false
</script>

<div>
	<input class="hidden" type="radio" name="payment-gateway" {id} {value} {checked}>
	<label class="flex items-center gap-2 mb-0 p-2 border-2 border-gray-200 rounded duration-150 ease-in-out cursor-pointer hover:border-brand hover:border-opacity-80"
		for={id}
	>
		<div class="relative">
			<img class="absolute aspect-square w-12 rounded blur duration-150 ease-in-out | hide" {src} alt loading="lazy">
			<img class="relative aspect-square w-12 rounded" {src} alt loading="lazy">
		</div>
		<div class="text-sm text-gray-600">
			<h6 class="font-bold">{title}</h6>
			<p class="mt-1 leading-3 text-2xs text-gray-500">{description}</p>
		</div>
	</label>
</div>

<style lang="postcss">
	input:checked + label {
		@apply border-brand border-opacity-80;
	}
	input:checked + label div img:first-of-type {
		@apply show;
	}
</style>
