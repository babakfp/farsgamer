<script>
	import { announcements } from "$store/announcements.js"
	import Alert from "$components/Alert.svelte"
</script>

<svelte:head>
	<title>اعلان‌ها</title>
</svelte:head>

{#if $announcements && $announcements.length > 0}
	<ul class="grid gap-4">
		{#each $announcements as announcement}
			<li
				class="grid p-4 bg-white rounded scroll-mt-[calc(var(--header)_+_1rem)] sm:p-6"
				id={announcement.id}
			>
				<div class="flex items-start justify-between">
					<span class="font-bold line-clamp-1">{announcement.title}</span>
					<span class="text-xs text-gray-500">{announcement.date}</span>
				</div>

				<p class="mt-1 text-sm sm:mt-2">{announcement.description}</p>
			</li>
		{/each}
	</ul>
{:else}
	<Alert>اعلان‌ای پیدا نشد!</Alert>
{/if}
