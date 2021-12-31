<script>
	export let title
	export let description
	export let link = 'javascript:'
</script>

<li class="border-b border-gray-100 last:border-0">
	<a class="grid p-4 bg-gray-50 border-r-3 border-gray-400 duration-100 ease-in-out" href={link}>
		<div class="font-semibold text-sm">{title}</div>
		<p class="mt-1 text-xs">{description}</p>
	</a>
</li>
