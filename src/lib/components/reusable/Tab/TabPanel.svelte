<script>
	export let className = ''
	export { className as class }
</script>

<div class="easytab__panel {className} p-4 rounded bg-white">
	<slot />
</div>
