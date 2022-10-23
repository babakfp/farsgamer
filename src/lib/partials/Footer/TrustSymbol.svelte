<script>
	export let src
	export let alt
</script>

<li>
	<a class="flex | w-20 | border border-gray-100 | rounded overflow-hidden | duration-300 ease-out transition-transform
		hover:scale-150 hover:z-1 hover:shadow-lg lg:hover:scale-125
		focus-visible:scale-150 focus-visible:z-1 focus-visible:shadow-lg lg:focus-visible:scale-125
	" href="javascript:">
		<img {src} {alt} loading="lazy" />
	</a>
</li>
