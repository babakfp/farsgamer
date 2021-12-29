<script>
	import { page } from '$app/stores'

	export let title
	export let icon
	export let link
</script>

<li>
	<a class:nav-menu-item--active={$page.path === link} class="relative flex items-center gap-3 py-3 pl-6 pr-5 overflow-hidden hover:text-brand" href={link}>
		<i class="{icon} w-8 h-8 flex justify-center items-center text-lg"></i>
		<span class="font-medium">{title}</span>
	</a>
</li>

<style lang="postcss">
	.nav-menu-item--active::before {
		content: "";
		@apply w-1 bg-brand absolute right-0 top-2 bottom-2 rounded-l;
	}
</style>
