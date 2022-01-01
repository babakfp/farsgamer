<script>
	import { page } from '$app/stores'

	export let title
	export let icon
	export let href
</script>

<li>
	<a class:nav-menu-item--active={$page.url.pathname === href} class="nav-menu-item relative flex items-center gap-3 py-3 pl-6 pr-5 overflow-hidden" href={href}>
		<i class="{icon} w-8 h-8 flex justify-center items-center text-lg"></i>
		<span class="font-medium">{title}</span>
	</a>
</li>

<style lang="postcss">
	.nav-menu-item:hover {
		@apply text-brand bg-brand bg-opacity-5;
	}
	.nav-menu-item::before {
		content: "";
		@apply w-1 bg-gray-200 absolute right-0 top-2 bottom-2 rounded-l duration-100 ease-in-out;
	}
	.nav-menu-item:hover::before {
		@apply bg-brand;
	}
	.nav-menu-item--active {
		@apply bg-brand bg-opacity-5;
	}
	.nav-menu-item--active::before {
		@apply bg-brand;
	}
</style>
