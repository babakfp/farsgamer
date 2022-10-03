<script>
	import { getContext } from 'svelte'

	export let name
	export let checked = false
	export let required = false
	export let className = ''
	export { className as class }
	export let classContent = ''
	
	const fieldsValidations = getContext('fieldsValidations')

	$: {
		fieldsValidations.update(currentValue => {
			currentValue[name] = checked
			return currentValue
		})
	}
</script>

<div class="flex {className}">

	<label class="group | inline-flex items-center justify-start gap-2 | mb-0" for={name}>
		<div class="relative | inline-flex items-center justify-center">
			<input class="inline-flex | w-[22px] min-w-[22px] h-[22px] | bg-white | border-2 border-gray-200 rounded-sm | duration-150 ease-in-out | cursor-pointer appearance-none | group-hover:border-brand hover:border-brand focus:border-brand | checked:bg-brand checked:border-brand [&:checked~i]:opacity-100 [&:checked~i]:scale-100 [&:checked~i]:translate-y-0 [&:checked~i]:translate-x-0"
				type="checkbox" bind:checked {name} id={name} {required}
			/>
			<i class="icon-check | absolute mt-0.5 | text-2xs text-white | duration-150 ease-in | opacity-0 scale-0 translate-y-2 -translate-x-2"></i>
		</div>

		<div class="text-sm {classContent}">
			<slot />
		</div>
	</label>

</div>
