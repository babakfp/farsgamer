<script>
	export let title
	export let price
	export let negative = false
</script>

<li
	class="flex items-center justify-between text-sm pb-2 mb-2 border-b border-gray-100 last:p-0 last:m-0 last:border-0"
>
	<span>{title}</span>
	<div class="flex items-center gap-1">
		<span class="flex items-center font-bold dir-ltr">
			<span class:invisible={!negative} class="text-gray-500">-</span>
			<span>{price}</span>
			<slot name="after-price" />
		</span>
		<span class="mt-0.5 text-2xs text-gray-500">تومان</span>
	</div>
</li>
