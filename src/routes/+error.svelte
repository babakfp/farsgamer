<script>
	import { page } from '$app/stores'
	import { dev } from '$app/env'
	console.log($page);
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<div class="py-32 -mb-4">
	<h1 class="text-center font-bold text-4xl">{$page.status}</h1>

	{#if $page.status === 404}

		<p class="text-center">صفحه‌ای که به دنبال آن میگردید, پیدا نشد.</p>
		
		<div class="flex justify-center gap-4 mt-4">
			<a class="btn btn--gray text-sm" href="/">صفحه اصلی</a>
			<a class="btn btn--gray text-sm" href="/shop">فروشگاه</a>
		</div>

	{:else}

		<h2 class="text-center">{$page.error.message}</h2>
		{#if $page.error.stack && dev}
			<code class="scrollbar scrollbar-x-spacing-lg block mt-8 p-4 bg-gray-200 rounded dir-ltr lg:p-8">
				<pre>
					{$page.error.stack}
				</pre>
			</code>
		{/if}

	{/if}
</div>
