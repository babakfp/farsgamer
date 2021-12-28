<script>
	export let title
	export let description
	export let href = ':javascript'
</script>

<a class="grid p-4 border-r-2 border-transparent duration-100 ease-in-out hover:border-gray-300" {href}>
	<div class="font-semibold text-sm">{title}</div>
	<p class="mt-1 text-xs">{description}</p>
</a>
