<script>
	export let num
</script>

<li class="flex gap-4 p-4 lg:p-6">
	<div class="flex items-center justify-center w-8 min-w-8 h-8 bg-green-100 rounded-sm">{num}</div>
	<div>
		<slot />
	</div>
</li>
