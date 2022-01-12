<script>
	export let title
	export let href
	export let icon
</script>

<li>
	<a class="nav-menu-item nav-menu-item--active" { href }>
		<i class="nav-menu-item__icon {icon}"></i>
		<span class="nav-menu-item__title">{ title }</span>
	</a>
</li>
