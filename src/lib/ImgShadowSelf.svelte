<script>
	export let src
	export let alt
	export let href = 'javascript:'

	let className
	export { className as class }
</script>

<a class="{className} group relative block duration-200 ease hover:scale-105" {href}>
	<img class="absolute bottom-0 px-8 blur-md rounded duration-300 ease-in-out opacity-0 group-hover:opacity-80 group-hover:-bottom-2" {src} {alt} />
	<img class="relative rounded" {src} {alt} />
</a>
