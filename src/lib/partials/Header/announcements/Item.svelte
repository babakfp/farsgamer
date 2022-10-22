<script>
	export let id
	export let title
	export let description
	export let date
</script>

<li class="border-b border-gray-100 last:border-0">
	<a class="grid p-4 duration-150 ease-in-out hover:bg-gray-100 focus-visible:bg-gray-100" href="/dashboard/announcements#{id}">
		
		<div class="flex items-start justify-between">
			<span class="font-bold text-sm line-clamp-1">{title}</span>
			<span class="text-2xs text-gray-500">{date}</span>
		</div>

		<p class="mt-1 text-xs">{description}</p>
	</a>
</li>
