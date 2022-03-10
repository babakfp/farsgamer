<script>
	import { makeSlug } from '$utils/make-slug.js'
	
	let className = null
	export { className as class }
	
	export let name
	export let title
	export let value = makeSlug(title)
</script>

<div class="flex {className}">
	<label class="inline-flex items-center justify-start gap-2 mb-0">
		<div class="relative inline-flex items-center justify-center">
			<input
				class="inline-flex w-6 min-w-6 h-6 border-2 border-gray-200 rounded-full duration-200 ease-in-out cursor-pointer appearance-none hover:border-gray-300"
				type="radio" {name} {value}
			/>
			<i class="fi-rr-check absolute text-white opacity-0 text-xs"></i>
		</div>
		<span>{title}</span>
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
