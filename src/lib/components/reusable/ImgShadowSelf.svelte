<script>
	export let src
	export let alt = null
	export let href = 'javascript:'
	export let rotateOnHover = true
	export let scaleOnHover = true
	export let lazyLoading = false
	export let className = ''
	export { className as class }
	export let classImg = null
</script>

<a class="{className} group relative block duration-200 ease {scaleOnHover && 'hover:scale-105'} {rotateOnHover && 'hover:rotate-2'}" {href}>
	<img class="{classImg} absolute bottom-0 px-8 blur-md rounded duration-300 ease-in-out opacity-0 group-hover:opacity-80 group-hover:-bottom-2" {src} {alt} loading="lazy">
	<img class="{classImg} relative rounded" {src} {alt} loading={lazyLoading && 'lazy'}>
</a>
