<script>
	import Select from '$components/Select.svelte'
	
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
	<Select items={categoryItems} {groupBy} placeholder="دسته‌بندی محصولات" />
	<Select items={sortItems} {groupBy} placeholder="مرتب سازی" />
</div>
