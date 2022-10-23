<script>
	export let src
	export let alt
</script>

<li>
	<a class="flex | w-20 | border border-gray-100 | rounded overflow-hidden | duration-300 ease-out
		hover:scale-125 hover:z-1 hover:drop-shadow-sm
		focus-visible:scale-125 focus-visible:z-1 focus-visible:drop-shadow-sm
	" href="javascript:">
		<img {src} {alt} loading="lazy" />
	</a>
</li>
