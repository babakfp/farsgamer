<script>
	import { browser } from '$app/env'
	import { goto } from '$app/navigation'
	import NavMenu from './_lib/NavMenu.svelte'
	import { isLoggedIn } from '$store/global.js'

	if (browser && !$isLoggedIn) goto('/login')
</script>

{#if $isLoggedIn}
	<div class="lg:flex lg:items-start lg:gap-4 xl:gap-8">
		<NavMenu />
		<div class="grid w-full">
			<slot />
		</div>
	</div>
{:else}
	<p>در حال انتقال به صفحه ورود به حساب کاربری...</p>
{/if}

<style lang="postcss">
	:global(body.dashboard-header #page-content) {
		@apply 2xl:p-8 2xl:pb-12;
	}
</style>
