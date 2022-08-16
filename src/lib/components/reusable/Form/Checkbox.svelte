<script>
	export let className = ''
	export { className as class }
	export let name
	export let checked = false
</script>

<div class="flex {className}">
  <!-- svelte-ignore a11y-label-has-associated-control -->
	<label class="inline-flex items-center justify-start gap-2 mb-0">
		<div class="relative inline-flex items-center justify-center">
			<input
				class="inline-flex w-6 min-w-6 h-6 border-2 border-gray-200 rounded-sm duration-200 ease-in-out cursor-pointer appearance-none hover:border-gray-300"
				type="checkbox" bind:checked {name}
			/>
			<i class="icon-check absolute mt-0.5 text-white opacity-0 text-xs"></i>
		</div>
		<div class="text-sm">
			<slot />
		</div>
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
