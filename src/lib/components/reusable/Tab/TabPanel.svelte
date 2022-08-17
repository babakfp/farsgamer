<script>
	export let className = ''; export { className as class }
	export let hash = null
</script>

<div id={hash} class="Tab__TabPanel {className} p-4 rounded bg-white scroll-mt-[calc(var(--header)_+_52px_+_2rem)]">
	<slot />
</div>
