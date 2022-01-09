<script>
	export let title
</script>

<main class="bg-cover bg-center bg-no-repeat">
	<div class="flex items-center w-screen h-screen p-4 backdrop-blur-sm">

		<div class="w-full">
		
			<a class="flex items-center justify-center gap-2 p-4 bg-white rounded-t border-b border-gray-100 hover:text-brand" href="/">
				<i class="icon-arrow-right-square"></i>
				<p>بازگشت به خانه</p>
			</a>
			
			<slot />
	
		</div>

	</div>
</main>

<style>
	main {
		background-image: url('/images/home/home-main-poster (3).png');
	}
</style>
