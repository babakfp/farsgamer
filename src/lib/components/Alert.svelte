<script>
	export let className = ""
	export { className as class }
	export let type = null
</script>

<div
	class="flex items-center gap-4 px-4 py-3 text-sm rounded border
		{!type && 'bg-gray-50 text-gray-900 border-gray-200'}
		{type === 'success' && 'bg-green-50 text-green-900 border-green-200'}
		{type === 'error' && 'bg-red-50 text-red-900 border-red-200'}
		{type === 'info' && 'bg-sky-50 text-sky-900 border-sky-200'}
		{type === 'warn' && 'bg-yellow-50 text-yellow-900 border-yellow-200'}
		{className}
	"
>
	<!-- <i class="icon-check text-sm" /> -->
	<slot />
</div>
