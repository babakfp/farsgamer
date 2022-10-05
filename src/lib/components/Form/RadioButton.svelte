<script>
	import { getContext } from 'svelte'
	export let value
	export let className = ''
	export { className as class }
	export let classContent = ''
	
	const name = getContext('name')
	const required = getContext('required')
	const selected = getContext('selected')
</script>

<label class="group | inline-flex items-center justify-start gap-2 | mb-0 | {className}" for="{name}-{value}">
	<input class="hidden | [&:checked~div>div]:bg-brand [&:checked~div>div]:border-brand [&:checked~div>div>i]:opacity-100 [&:checked~div>div>i]:scale-100 [&:checked~div>div>i]:translate-y-0 [&:checked~div>div>i]:translate-x-0"
		type="radio" bind:group={$selected} {name} id="{name}-{value}" {value} {required}
	/>

	<div class="btn btn--light btn--outline gap-2 pr-2 pl-3">
		<div class="relative inline-flex items-center justify-center | w-[22px] min-w-[22px] h-[22px] | bg-white | border-2 border-gray-200 rounded-full | duration-150 ease-in-out | group-hover:border-brand hover:border-brand focus:border-brand">
			<i class="icon-check | absolute mt-0.5 | text-2xs text-white | duration-150 ease-in | opacity-0 scale-0 translate-y-2 -translate-x-2" />
		</div>

		<span class="text-sm {classContent}">
			<slot />
		</span>
	</div>
</label>
