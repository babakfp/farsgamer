<script>
	import MainPosters from '$lib/home/MainPosters.svelte'
	import SecondPosters from '$lib/home/SecondPosters.svelte'
</script>

<section class="md:flex md:gap-4">
	<div class="md:w-8/12">
		<MainPosters />
	</div>
	<div class="grid justify-center items-baseline gap-4 mt-4 xs:flex md:grid md:w-auto md:mt-0">
		<!-- <SecondPosters /> -->
	</div>
</section>
