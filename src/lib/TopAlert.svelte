<script>
	import { browser, dev, mode } from '$app/env'
	import { writable } from 'svelte-local-storage-store'
	import { isOpen as isSideMenuOpen } from '$store/mobile-menu.js'

	const showTopAlert = writable('showTopAlert', true)
</script>

{#if browser && $showTopAlert && !$isSideMenuOpen}
	<div id="TopAlert" class="flex items-center p-4 bg-white border-b border-gray-100">
		<button class="p-4 -mr-4 -my-4 duration-150 hover:text-brand hover:scale-110"
			on:click={_=> $showTopAlert = false}
		>
			<i class="fi-rr-cross-small"></i>
		</button>
		<div class="text-sm">
			<p>پشتیبانی 24 ساعته از طریق چت آنلاین در خدمت شما عزیزان. جهت اطلاع از آخرین اخبار <a class="link link--underline" href="javascript:">اینستاگرام فارس گیمر</a> را دنبال کنید.</p>
		</div>
	</div>
{/if}
