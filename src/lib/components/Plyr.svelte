<script>
	import { onMount } from "svelte"

	export let className = ""
	export { className as class }

	export let options = {}
	export let videoUrl = ""
	export let videoPosterUrl = ""

	let id

	let isVideoLoading = true
	onMount(() => {
		new Plyr(id, options)
		isVideoLoading = false
	})
</script>

<div class="relative rounded overflow-hidden {className}">
	<video class="w-full" bind:this={id} playsinline controls data-poster={videoPosterUrl}>
		<source src={videoUrl} type="video/mp4" />
		<!-- A11Y -->
		<track kind="captions" />
	</video>
	{#if isVideoLoading}
		<div
			class="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 text-white"
		>
			<div class="grid gap-4">
				<i class="icon-spinner animate-spin text-4xl" />
				<p class="text-sm">در حال بارگذاری ویدیو...</p>
			</div>
		</div>
	{/if}
</div>
