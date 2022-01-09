<script>
	export let title
</script>

<li class="grid gap-2 sm:flex sm:gap-4">
			
	<!-- Title -->
	<div class="sm:relative sm:w-6 sm:min-w-6 sm:max-w-6">
		<p class="font-bold sm:absolute sm:-rotate-90 sm:origin-top-right sm:mr-6 sm:whitespace-nowrap sm:bg-gray-100">{ title }</p>
		<div class="hidden sm:block -z-1 absolute w-px h-full right-1/2 translate-x-1/2 bg-gray-200"></div>
	</div>

	<!-- Accordions -->
	<ol class="grid gap-2">
		<slot />
	</ol>

</li>
