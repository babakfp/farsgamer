<script>
	export let id
	export let title
	export let featuredImage
	export let lazyLoading = false
</script>

<a class="grid p-2 text-center rounded bg-white duration-200 ease-in-out hover:shadow-sm hover:scale-105 hover:rotate-2" href="/blog/{id}">
	<img class="rounded" src={featuredImage} alt loading={lazyLoading && 'lazy'}>
	<div class="p-2 mt-2">
		<h3 class="text-sm font-bold line-clamp-1">{title}</h3>
	</div>
</a>
