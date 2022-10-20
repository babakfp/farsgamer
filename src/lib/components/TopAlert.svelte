<script>
	import { browser } from '$app/environment'
	import { writable } from 'svelte-local-storage-store'
	import { isOpen } from '$store/mobile-menu.js'

	const topAlertVisible = writable('topAlertVisible', true)
</script>

{#if browser && $topAlertVisible && !$isOpen}
	<div id="TopAlert" class="z-30 relative flex items-center bg-white border-b border-gray-100">
		<button class="p-4 duration-150 hover:text-brand hover:scale-110"
			on:click={()=> $topAlertVisible = false}
		>
			<i class="icon-cross-small" />
		</button>
		<div class="p-4 pr-0 text-sm">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <p>پشتیبانی 24 ساعته از طریق چت آنلاین در خدمت شما عزیزان. جهت اطلاع از آخرین اخبار <a class="link link--underline" href="javascript:">اینستاگرام فارس گیمر</a> را دنبال کنید.</p>
		</div>
	</div>
{/if}
