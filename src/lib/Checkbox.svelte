<script>
	let className = ''
	export { className as class }
	export let name
	export let checked = false
</script>

<div class="flex {className}">
	<label class="inline-flex items-center justify-start gap-3 mb-0">
		<input
			class="relative inline-block w-6 h-6 border-2 border-gray-200 rounded-sm duration-200 ease-in-out cursor-pointer appearance-none"
			type="checkbox" bind:checked {name}
		/>
		<span class="text-sm"><slot /></span>
	</label>
</div>

<style lang="postcss">
	input::before {
		@apply absolute opacity-0 text-xs top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2;
		content: "\f160";
		font-family: uicons-regular-rounded;
	}
	input:checked {
		@apply bg-brand text-white border-brand;
	}
	input:checked::before {
		opacity: 1;
	}
</style>
