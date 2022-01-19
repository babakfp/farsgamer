<script>
	export let title
	export let description
	export let href = 'javascript:'
</script>

<li class="border-b border-gray-100 last:border-0">
	<a class="grid p-4 duration-100 ease-in-out hover:bg-gray-100" {href}>
		
		<div class="flex items-center justify-between">
			<span class="font-semibold text-sm line-clamp-1">{title}</span>
			<span class="text-2xs text-gray-500">۲ روز پیش</span>
		</div>

		<p class="mt-1 text-xs">{description}</p>
	</a>
</li>
