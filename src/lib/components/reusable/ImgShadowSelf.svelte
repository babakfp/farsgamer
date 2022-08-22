<script>
	export let src
	export let alt = null
	export let href = 'javascript:'
	export let className = ''; export { className as class }
	export let classImg = null
</script>

<a class="{className} group relative block duration-300 ease-in-out" {href}>
	<img class="{classImg} rounded duration-300 ease-in-out absolute -bottom-2 blur opacity-0 group-hover:opacity-50 group-hover:scale-x-105" {src} {alt} loading="lazy">
	<img class="{classImg} rounded duration-300 ease-in-out relative group-hover:contrast-105" {src} loading="lazy" {alt}>
</a>
