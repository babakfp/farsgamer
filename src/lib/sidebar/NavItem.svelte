<script>
	export let title
	export let icon
	export let href
</script>

<li>
	<a class="relative flex items-center gap-3 py-3 pl-6 pr-5 hover:bg-gray-100" href={href}>
		<i class="{icon} w-8 h-8 flex justify-center items-center text-lg"></i>
		<span class="font-medium">{title}</span>
	</a>
</li>
