<script>
	import { page } from '$app/stores'

	export let title
	export let icon
	export let href
	export let useInDashboard = false
</script>

<li>
	<a class="
		relative flex items-center gap-3 py-3 pl-6 pr-5
		{ ( $page.url.pathname === href ) === false ? !useInDashboard ? 'hover:bg-gray-100' : 'hover:text-brand' : '' }
		{ useInDashboard && ( $page.url.pathname === href ) && 'text-brand' }
		{ ( $page.url.pathname === href ) && 'cursor-default' }
		"
		{href}
	>
		<i class="{icon} w-8 h-8 flex justify-center items-center text-lg"></i>
		<span class="font-medium">{ title }</span>
	</a>
</li>
