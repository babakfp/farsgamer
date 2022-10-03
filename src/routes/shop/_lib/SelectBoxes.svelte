<script>
	import Select from 'svelte-select'
	
	const categoryItems = [
		{ group: 'فورتنایت | Fortnite', label: 'ویباکس | V-Bucks', value: 'v-bucks' },
		{ group: 'فورتنایت | Fortnite', label: 'باندل‌ها', value: 'bundles' },
		{ group: 'فورتنایت | Fortnite', label: 'آیتم‌های بازی', value: 'game-items' },

		{ group: 'گیفت کارد | Gift Card', label: 'PlayStation', value: 'gift-card[play-station]' },
		{ group: 'گیفت کارد | Gift Card', label: 'Steam', value: 'gift-card[steam]' },
		{ group: 'گیفت کارد | Gift Card', label: 'Xbox', value: 'gift-card[xbox]' },
		{ group: 'گیفت کارد | Gift Card', label: 'Google Play', value: 'gift-card[google-play]' },
		
		{ group: 'تجهیزات بازی | Gaming', label: 'مانیتور', value: 'pc[monitor]' },
		{ group: 'تجهیزات بازی | Gaming', label: 'کیبورد', value: 'pc[keyboard]' },
		{ group: 'تجهیزات بازی | Gaming', label: 'موس', value: 'pc[mouse]' },
	]

	const sortItems = [
		{ label: 'محبوب ترین', value: 'most-popular' },
		{ label: 'پرفروش ترین', value: 'best-seller' },
		{ label: 'ارزان ترین', value: 'cheapest' },
		{ label: 'گران ترین', value: 'most-expensive' },
	]

	const groupBy = item => item.group
</script>

<div class="grid gap-4 3xs:flex">
	<div class="relative w-full">
		<Select
			items={categoryItems} {groupBy}
			placeholder="دسته‌بندی محصولات" noOptionsMessage="گذینه‌ای موجود نیست"
		/>
		<i class="icon-caret-down absolute top-1/2 -translate-y-1/2 left-4 text-gray-300"></i>
	</div>
	
	<div class="relative w-full">
		<Select
			items={sortItems} {groupBy}
			placeholder="مرتب سازی" noOptionsMessage="گذینه‌ای موجود نیست"
		/>
		<i class="icon-caret-down absolute top-1/2 -translate-y-1/2 left-4 text-gray-300"></i>
	</div>
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
	}

	:global(.selectContainer) {
		@apply text-sm;
	}

	:global(.selectContainer input),
	:global(.selectContainer .item) {
		@apply !cursor-pointer;
	}
	:global(.selectContainer .groupItem) {
		@apply pr-10;
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
</style>