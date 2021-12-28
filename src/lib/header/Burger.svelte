<script>
	import { isOpen } from '$store/mobile-menu.js'
</script>

<button class="w-16 h-16 -mr-4 flex items-center justify-center" on:click={_=> $isOpen = !$isOpen} id="burger">
	<i class="fi fi-rr-grid duration-100 {$isOpen && 'rotate-45'}"></i>
</button>
