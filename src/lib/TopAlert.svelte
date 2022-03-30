<script>
	import { writable } from 'svelte-local-storage-store'
	const showTopAlert = writable('showTopAlert', true)
	import { isOpen as isSideMenuOpen } from '$store/mobile-menu.js'
</script>

{#if $showTopAlert && !$isSideMenuOpen}
	<div class="z-10 sticky top-0 shadow-b-sm-muted">
		<div class="flex p-4 bg-white bg-opacity-75 backdrop-blur-md">
			<button class="h-full p-4 -mr-4 -my-4" on:click={_=> $showTopAlert = false}>
				<i class="fi-rr-cross-small"></i>
			</button>
			<div>
				<p class="text-sm">پشتیبانی 24 ساعته از طریق چت آنلاین در خدمت شما عزیزان. جهت اطلاع از آخرین اخبار <a class="link link--underline" href="javascript:">اینستاگرام فارس گیمر</a> را دنبال کنید.</p>
			</div>
		</div>
	</div>
{/if}
