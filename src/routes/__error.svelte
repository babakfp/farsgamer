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

<h1 class="text-center font-bold text-2xl">{status}</h1>
<h2 class="text-center">{error.message}</h2>

{#if dev}
	<code class="scrollbar scrollbar--x block mt-8 p-4 bg-gray-800 text-white rounded dir-ltr lg:p-8">
		<pre>
			{error.stack}
		</pre>
	</code>
{/if}
