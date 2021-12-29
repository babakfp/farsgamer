<script>
	import { isOpen, toggle } from '$store/mobile-menu.js'
</script>

<button class="js-burger-toggle-btn w-16 h-16 -mr-4 flex items-center justify-center" on:click={toggle} id="burger">
	<i class="fi-rr-grid duration-100 {$isOpen && 'rotate-45'}"></i>
</button>
