<script>
	export let type
</script>

<p
	class="text-xs
	{type === 'error' && 'text-red-500'}
	{type === 'success' && 'text-green-500'}
	{!type && 'text-gray-500'}
"
>
	<slot />
</p>
