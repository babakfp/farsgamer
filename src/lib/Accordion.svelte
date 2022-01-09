<script>
	export let title
	let open = false
</script>

<div class="grid">
	
	<!-- Toggle -->
	<button class="flex items-center justify-between w-full p-4 bg-white border-2 border-gray-200 rounded hover:text-brand" on:click={_=> open = !open}>
		<span class="line-clamp-1 text-sm lg:text-base">{ title }</span>
		<svg class="fill-gray-400"><use xlink:href="#svg-caret-down"></use></svg>
	</button>

	<!-- Body -->
	<div class="-z-1 relative { open ? 'h-auto' : 'h-0 pointer-events-none' } -mt-4 overflow-hidden duration-300 ease-in-out">
		<div class="p-4 pt-8 bg-white border-2 border-gray-200 rounded-b text-sm">
			<slot />
		</div>
	</div>

</div>

