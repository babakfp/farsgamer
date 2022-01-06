<script>
	export let title
	export let description
	export let href = 'javascript:'
</script>

<li class="border-b border-gray-200 last:border-0">
	<a class="grid p-4 duration-100 ease-in-out hover:bg-gray-100" {href}>
		<div class="font-semibold text-sm">{title}</div>
		<p class="mt-1 text-xs">{description}</p>
	</a>
</li>
