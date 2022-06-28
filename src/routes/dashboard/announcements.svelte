<script>
	import { announcements } from '$store/announcements.js'
	import Alert from '$components/Alert.svelte'
</script>

{#if $announcements && $announcements.length > 0}
	<ul class="grid gap-4">
		{#each $announcements as ann}
			<li class="grid p-4 bg-white rounded">
				<div class="flex items-center justify-between">
					<span class="font-bold line-clamp-1">{ann.title}</span>
					<span class="text-xs text-gray-500">۲ روز پیش</span>
				</div>

				<p class="mt-1 text-sm">{ann.description}</p>
			</li>
		{/each}
	</ul>
{:else}
	<Alert>اعلان‌ای پیدا نشد!</Alert>
{/if}
