<script>
	import { makeSlug } from '$utilities/make-slug.js'
	export let name
	export let value = ''
	export let contentClass = ''
	export let className = ''; export { className as class }
	export let selectedValue
</script>

<div class="flex {className}">

  <!-- svelte-ignore a11y-label-has-associated-control -->
	<label class="group inline-flex items-center justify-start gap-2 mb-0">
		<div class="relative inline-flex items-center justify-center">

			<input
				class="inline-flex w-6 min-w-6 h-6 border-2 border-gray-200 rounded-full duration-200 ease-in-out cursor-pointer appearance-none hover:border-brand group-hover:border-brand checked:bg-brand checked:border-brand [&:checked~i]:opacity-100"
				type="radio" {name} value={makeSlug(value)}
				bind:group={selectedValue}
			/>
			<i class="icon-check absolute text-white opacity-0 text-xs"></i>
		</div>

		<span class={contentClass}><slot /></span>
	</label>

</div>
