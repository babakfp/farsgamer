<script>
	import { isOpen, toggle } from '$store/mobile-menu.js'
</script>

<button on:click={toggle} class="js-burger-toggle-btn flex items-center justify-center w-16 h-16 -mr-4" id="burger">
	<i class="fi-rr-grid duration-300 ease-in-out {$isOpen && 'rotate-45'} sm:text-lg"></i>
</button>
