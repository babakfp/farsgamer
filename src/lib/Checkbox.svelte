<script>
	let className = null
	export { className as class }
	export let name
	export let checked = false
</script>

<div class="flex {className}">
	<label class="inline-flex items-center justify-start gap-2 mb-0">
		<div class="relative inline-flex items-center justify-center">
			<input
				class="inline-flex w-6 min-w-6 h-6 border-2 border-gray-200 rounded-sm duration-200 ease-in-out cursor-pointer appearance-none hover:border-gray-300"
				type="checkbox" bind:checked {name}
			/>
			<i class="fi-rr-check absolute text-white opacity-0 text-xs"></i>
		</div>
		<span class="text-sm"><slot /></span>
	</label>
</div>

<style lang="postcss">
	input:checked {
		@apply bg-brand border-brand;
	}
	input:checked ~ i {
		@apply opacity-100;
	}
</style>
