<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		}
	}
</script>

<script>
	import { dev } from '$app/env'

	export let error
	export let status
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="py-32 -mb-4">
	<h1 class="text-center font-bold text-2xl">{status}</h1>
	<h2 class="text-center">{error.message}</h2>

	{#if dev && error.stack}
		<code class="scrollbar scrollbar--x-lg block mt-8 p-4 bg-gray-200 rounded dir-ltr lg:p-8">
			<pre>
				{error.stack}
			</pre>
		</code>
	{/if}
</div>
