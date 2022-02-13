<script>
	let className = ''
	export { className as class }
	
	export let name
	export let title
	export let value = convertToSlug(title)

	function convertToSlug(text) {
		return text.toLowerCase()
			.replace(/ /g, '-')
			.replace(/[^\w-]+/g, '');
	}
</script>

<div class="flex {className}">
	<label class="inline-flex items-center justify-start gap-2 mb-0">
		<input
			class="relative inline-block w-5 min-w-5 h-5 min-h-5 border-2 border-gray-200 rounded-full duration-200 ease-in-out cursor-pointer appearance-none"
			type="radio" {name} {value}
		/>
		<span class="text-sm">{title}</span>
	</label>
</div>

<style lang="postcss">
	input::before {
		@apply absolute opacity-0 text-2xs top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2;
		content: "\f160";
		font-family: uicons-regular-rounded;
	}
	input:checked {
		@apply bg-brand text-white border-brand ring-4 ring-brand ring-opacity-25;
	}
	input:checked::before {
		opacity: 1;
	}
</style>
