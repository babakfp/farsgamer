<script>
	import Select from 'svelte-select'
	
	const complexItems = [
		{ group: 'فورتنایت | Fortnite', value: 'v-bucks', label: 'ویباکس | V-Bucks' },
		{ group: 'فورتنایت | Fortnite', value: 'bundles', label: 'باندل‌ها' },
		{ group: 'فورتنایت | Fortnite', value: 'game-items', label: 'آیتم‌های بازی' },
		{ group: 'فورتنایت | Fortnite', value: 'gun-save-the-world', label: 'Gun - Save the World' },
		{ group: 'فورتنایت | Fortnite', value: 'material-save-the-world', label: 'Material - Save the World' },

		{ group: 'گیفت کارد | Gift Card', label: 'Play Station', value: 'gift-card[play-station]' },
		{ group: 'گیفت کارد | Gift Card', label: 'Apple', value: 'gift-card[apple]' },
		{ group: 'گیفت کارد | Gift Card', label: 'Steam', value: 'gift-card[steam]' },
		{ group: 'گیفت کارد | Gift Card', label: 'Amazon', value: 'gift-card[amazon]' },
		{ group: 'گیفت کارد | Gift Card', label: 'Xbox', value: 'gift-card[xbox]' },
		{ group: 'گیفت کارد | Gift Card', label: 'Google Play', value: 'gift-card[google-play]' },
		
		{ group: 'تجهیزات بازی | Gaming', label: 'مانیتور', value: 'pc[monitor]' },
		{ group: 'تجهیزات بازی | Gaming', label: 'کیبورد', value: 'pc[keyboard]' },
		{ group: 'تجهیزات بازی | Gaming', label: 'موس', value: 'pc[mouse]' },
		{ group: 'تجهیزات بازی | Gaming', label: 'موس پد', value: 'pc[mouse-pad]' },
		{ group: 'تجهیزات بازی | Gaming', label: 'هدفون / هدست', value: 'pc[headphone]' },
		{ group: 'تجهیزات بازی | Gaming', label: 'میکروفون', value: 'pc[microphone]' },
	]
	
	const groupBy = (item) => item.group
</script>

<div class="relative">
	<Select
		items={complexItems} {groupBy} isMulti={true}
		placeholder="دسته‌بندی محصولات" noOptionsMessage="گذینه‌ای موجود نیست"
	/>
	<svg class="absolute top-1/2 -translate-y-1/2 left-4 fill-gray-300"><use xlink:href="#svg-caret-down"></use></svg>
</div>

<style lang="postcss">
	:root {
		--borderRadius: theme('borderRadius.sm');
		--border: 2px solid theme('colors.gray.300');
		--itemIsActiveBG: theme('colors.brand.DEFAULT');
		--listBorderRadius: theme('borderRadius.sm');
		--selectedItemPadding: 0 0 0 1rem;
		--clearSelectWidth: 2rem;
		--itemHoverBG: rgb(61 66 223 / 10%);
		--multiLabelMargin: 0 0 0 4px;

		--multiClearFill: theme('colors.gray.400');
		--multiClearHeight: 100%;
		--multiClearWidth: theme('width.6');

		--multiItemBG: theme('colors.gray.100');
		--multiItemActiveBG: theme('colors.gray.100');
		--multiItemActiveColor: theme('colors.body-text');

		--multiItemMargin: 5px 0 0 5px;
		--multiSelectPadding: 0 .5rem 0 2rem;
	}

	:global(.selectContainer input),
	:global(.selectContainer .groupItem) {
		@apply !cursor-pointer;
	}
	:global(.selectContainer .clearSelect) {
		@apply flex items-center justify-center !right-auto !text-gray-300 cursor-pointer duration-100 ease-in-out hover:!text-brand hover:text-opacity-80;
		height: calc(100% + 4px);
		left: 2rem;
		top: -2px !important;
	}
	:global(.selectContainer .clearSelect svg) {
		@apply w-5;
	}
	:global(.selectContainer .listContainer) {
		@apply !top-12 !bottom-auto;
	}
	:global(.selectContainer .multiSelectItem_clear) {
		@apply flex items-center justify-center cursor-pointer -ml-3.5 !top-auto !bg-transparent !rounded;
	}
	:global(.selectContainer .multiSelectItem_label) {
		@apply text-sm;
	}
	:global(.selectContainer .multiSelectItem) {
		@apply inline-flex items-center !rounded;
	}
	   
</style>