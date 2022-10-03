<script>
	import Select from 'svelte-select'
	
	export let items
	export let placeholder
	export let groupBy
	export let noOptionsMessage = 'گذینه‌ای وجود نیست!'
</script>

<div class="relative w-full">
	<Select {items} {groupBy} {placeholder} {noOptionsMessage} />
	<i class="icon-caret-down absolute top-1/2 -translate-y-1/2 left-4 text-gray-300 pointer-events-none"></i>
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
		left: 2rem;
		top: -2px !important;
	}
	.selectContainer .clearSelect svg {
		@apply w-5;
	}
	.selectContainer .listContainer {
		@apply !top-12 !bottom-auto;
	}
</style>
