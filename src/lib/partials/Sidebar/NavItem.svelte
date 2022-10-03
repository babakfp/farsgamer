<script>
	export let title
	export let icon
	export let href
  
	import { page } from '$app/stores'
</script>

<li>
	<a class="relative flex items-center gap-3 py-3 pl-6 pr-5 hover:text-brand
    {href === $page.url.pathname && 'bg-gray-50 text-brand cursor-default'}"
		{href}>
		<i class="{icon} w-8 h-8 flex items-center justify-center text-lg opacity-75"></i>
		<span class="font-medium">{title}</span>
	</a>
</li>
