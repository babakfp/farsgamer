<script>
	import Select from 'svelte-select'
	
	export let items
	export let value = null
	export let placeholder = null
	export let groupBy = null
	export let noOptionsMessage = 'چیزی پیدا نشد!'
</script>

<div class="relative w-full">
	<Select on:clear bind:value {items} {groupBy} {placeholder} {noOptionsMessage} />
	<i class="icon-caret-down absolute top-0.5 bottom-0.5 left-0.5 pl-3 bg-white rounded text-gray-300 pointer-events-none"></i>
</div>

<style lang="postcss" global>
	:root {
		--borderRadius: theme('borderRadius.sm');
		--border: 2px solid theme('colors.gray.300');
		--itemIsActiveBG: theme('colors.brand.DEFAULT');
		--listBorderRadius: theme('borderRadius.sm');
		--selectedItemPadding: 0 0 0 1rem;
		--clearSelectWidth: 2rem;
		--itemHoverBG: theme(colors.gray.100);
		--clearSelectColor: theme(colors.gray.300);
		--borderFocusColor: theme(colors.brand.DEFAULT)
	}
	.selectContainer {
		@apply text-sm;
	}
	.selectContainer input,
	.selectContainer .item {
		@apply !cursor-pointer;
	}
	.selectContainer .item {
		@apply duration-150;
	}
	.selectContainer .groupItem {
		@apply pr-10;
	}
	.selectContainer .clearSelect {
		@apply flex items-center justify-center !right-auto !text-gray-300 cursor-pointer duration-100 ease-in-out hover:!text-brand hover:text-opacity-80;
		height: calc(100% + 4px);
		left: 1.5rem;
		top: -2px !important;
	}
	.selectContainer .clearSelect svg {
		@apply w-5;
	}
	.selectContainer .listContainer {
		@apply !top-12 !bottom-auto;
	}
	.listItem:first-of-type .item {
		@apply h-12 pt-2;
	}
	.listItem:last-of-type .item {
		@apply h-12 pb-2;
	}
</style>
