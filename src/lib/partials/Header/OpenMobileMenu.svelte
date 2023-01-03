<script>
	import { isOpen } from "$store/mobile-menu.js"
</script>

<div class="h-full border-l border-gray-100">
	<button
		on:click={() => ($isOpen = !$isOpen)}
		class="group js-burger-toggle-btn flex items-center justify-center w-header h-header -mr-4 duration-200 active:scale-95"
		aria-label="{$isOpen ? 'باز کردن' : 'بستن'} منو"
	>
		<i
			class="icon-apps text-gray-600 duration-300 ease-in-out {$isOpen &&
				'rotate-45'} group-hover:text-brand group-focus-visible:text-brand sm:text-lg"
		/>
	</button>
</div>

<style lang="postcss">
	:global(body.main-header) div {
		@apply lg:hidden !important;
	}
</style>
