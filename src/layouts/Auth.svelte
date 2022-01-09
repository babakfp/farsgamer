<script>
	import HeaderMmenu from './HeaderMmenu.svelte'
	export let title
</script>

<HeaderMmenu>
	<div class="bg-cover bg-center bg-no-repeat" style="background-image: url('/images/home/home-main-poster (3).png')">
		<div class="flex items-center w-screen h-screen p-4 backdrop-blur-sm">

			<slot />

		</div>
	</div>
</HeaderMmenu>

<!-- <style>
	:global(main) {
		@apply !mt-16 !pl-0 lg:!pr-60 lg:!mt-20 2xl:!pr-68;
	}
	:global(footer) {
		@apply !mt-0;
	}
</style> -->
