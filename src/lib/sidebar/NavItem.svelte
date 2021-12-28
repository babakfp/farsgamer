<script>
	import { page } from '$app/stores'

	export let title
	export let icon
	export let link
</script>

<li>
	<a class:nav-menu-item--active={$page.path === link} class="nav-menu-item" href={link}>
		<i class="nav-menu-item__icon {icon}"></i>
		<span class="nav-menu-item__title">{title}</span>
	</a>
</li>

<style lang="postcss">
	.nav-menu-item {
		@apply flex items-center gap-3 py-3 pl-6 pr-4 rounded-xl overflow-hidden hover:text-brand;
	}

	.nav-menu-item--active {
		@apply bg-brand text-white hover:text-white;
	}

	.nav-menu-item__icon {
		@apply w-8 h-8 flex justify-center items-center text-lg;
	}

	.nav-menu-item__title {
		@apply font-medium;
	}
</style>
