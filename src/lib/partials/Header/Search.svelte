<script>
	import { isOpen } from "$store/header-search.js"
</script>

<div
	class="z-10 | fixed inset-0 | bg-gray-400/90 | lg:hidden
	duration-300 ease-out | hide {$isOpen && 'show'}"
	on:click={() => ($isOpen = false)}
/>

<form
	class="z-10 | absolute top-0 inset-x-0 | h-full | bg-white
	hide -translate-y-full {$isOpen && 'show translate-y-0'} duration-300 ease-out
  lg:static lg:inset-auto lg:w-full lg:translate-y-0 lg:show
"
>
	<label class="relative flex items-center gap-4 h-full m-0 cursor-text">
		<div class="absolute flex items-center justify-center w-header h-header">
			<i class="icon-search text-lg text-gray-400" />
		</div>

		<input
			class="h-full p-0 pl-18 pr-16 text-sm capitalize bg-transparent lg:pl-4 lg:border-l lg:border-gray-100 lg:text-base"
			type="search"
			id="search"
			name="search"
			placeholder="جستجو در محصولات فارس گیمر"
			autocomplete="off"
		/>

		<button
			class="group absolute left-0 flex items-center justify-center w-14 h-full p-0 border-0 rounded-none border-r border-gray-100 lg:hidden"
			on:click|preventDefault={() => ($isOpen = false)}
		>
			<i class="icon-arrow-small-up text-xl text-gray-400 group-hover:text-brand" />
		</button>
	</label>
</form>

<style lang="postcss">
	:global(body.dashboard-header) {
		form {
			@apply border-r border-gray-100;
		}
		.w-header {
			@apply lg:!w-auto px-4;
		}
		input {
			@apply lg:!pr-14;
		}
	}
</style>
