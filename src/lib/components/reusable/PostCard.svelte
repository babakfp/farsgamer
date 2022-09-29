<script>
	export let id
	export let title
	export let featuredImage
	export let lazyLoading = false
</script>

<a class="grid p-2 text-center rounded bg-white duration-200 ease-in-out outline-card" href="/blog/{id}">
	<img class="rounded aspect-[16/9]" src={featuredImage} alt={title} loading={lazyLoading && 'lazy'}>
	<div class="p-2 mt-2">
		<h3 class="text-xs font-bold line-clamp-1 dir-ltr">{title}</h3>
	</div>
</a>
