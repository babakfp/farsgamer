<script>
	import { page } from '$app/stores'

	export let title
	export let icon
	export let href
	export let useInDashboard = false
</script>

<li>
	<a class="
		relative flex items-center gap-3 py-3 pl-6 pr-5 hover:text-brand
		{ !useInDashboard ? 'hover:bg-gray-50' : '' }
		{ useInDashboard && (href === $page.url.pathname) ? 'text-brand' : '' }
		{ (href === $page.url.pathname) ? 'cursor-default' : '' }
		"
		{href}
	>
		<i class="{icon} w-8 h-8 flex justify-center items-center text-lg opacity-75"></i>
		<span class="font-medium">{ title }</span>
	</a>
</li>
