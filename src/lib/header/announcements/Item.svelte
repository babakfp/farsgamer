<script>
	export let title
	export let description
	export let link = ':javascript'
</script>

<li class="border-b border-gray-100 last:border-0">
	<a class="grid p-4 border-r-2 border-transparent duration-100 ease-in-out hover:border-gray-300" href={link}>
		<div class="font-semibold text-sm">{title}</div>
		<p class="mt-1 text-xs">{description}</p>
	</a>
</li>
