<script>
	export let src
	export let alt = null
	export let href = 'javascript:'
	export let className = ''; export { className as class }
	export let classImg = null
</script>

<a class="{className} group relative block" {href}>
	<img class="{classImg} absolute bottom-0 px-8 blur-md rounded duration-300 ease-in-out opacity-0 group-hover:opacity-80 group-hover:-bottom-2" {src} {alt} loading="lazy">
	<img class="{classImg} relative rounded" {src} loading="lazy" {alt}>
</a>
