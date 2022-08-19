<script>
	export let src
	export let alt = null
	export let href = 'javascript:'
	export let className = ''; export { className as class }
	export let classImg = null
</script>

<a class="{className} group relative block" {href}>
	<img class="{classImg} rounded duration-200 ease-in absolute -bottom-2 -left-2 blur opacity-0 group-hover:opacity-50" {src} {alt} loading="lazy">
	<img class="{classImg} rounded duration-200 ease-in relative group-hover:contrast-105" {src} loading="lazy" {alt}>
</a>
