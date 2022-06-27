<script>
	import OutClick from 'svelte-outclick'
	import { isOpen, close } from '$store/header-search.js'
</script>

<OutClick on:outclick={close} excludeByQuerySelector={['.js-mobile-search-toggle']}>
	<form class="
    -translate-y-full {$isOpen && 'translate-y-0'} duration-300 ease-out
    z-10 absolute h-full inset-0 bg-white
    lg:static lg:inset-auto lg:w-full lg:max-w-full lg:translate-y-0
  ">
		<label class="relative flex items-center gap-4 h-full m-0 cursor-text">
			
      <!-- Icon -->
      <div class="absolute flex items-center justify-center w-16 h-full">
        <i class="icon-search text-lg text-gray-400"></i>
      </div>

			<input class="h-full p-0 pl-18 pr-16 text-sm capitalize bg-transparent lg:pl-4 lg:border-l lg:border-gray-100 lg:text-base" type="search" id="search" name="search" placeholder="جستجو در محصولات فارس گیمر" autocomplete="off">
      
      <button class="group absolute left-0 flex items-center justify-center w-14 h-full | p-0 border-0 rounded-none | border-r border-gray-100 lg:hidden" on:click|preventDefault={close}>
        <i class="icon-arrow-small-up text-xl text-gray-400 group-hover:text-brand"></i>
      </button>
    </label>
	</form>
</OutClick>
