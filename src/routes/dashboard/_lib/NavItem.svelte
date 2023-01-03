<script>
	import { page } from "$app/stores"
	export let title
	export let href
	export let icon
</script>

<li>
	<a
		class="relative flex items-center gap-3 py-3 pl-6 pr-5 hover:text-brand focus-visible:text-brand
    {href === $page.url.pathname && 'text-brand cursor-default'}"
		{href}
	>
		<i class="{icon} w-8 h-8 flex items-center justify-center text-lg opacity-75" />
		<span class="font-medium">{title}</span>
	</a>
</li>
