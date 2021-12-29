<script>
	import OutClick from 'svelte-outclick'
	import { isOpen, close } from '$store/header-search.js'
</script>

<OutClick on:outclick={close} exclude={['.js-header-search-toggle']}>
	<form class="hidden {$isOpen && '!block'} absolute h-16 top-full right-0 left-0 bg-white border-t border-b border-gray-100 lg:block lg:w-full lg:h-full lg:border-l lg:border-t-0 lg:border-b-0 lg:static lg:top-auto lg:right-auto lg:left-auto lg:bg-transparent">
		<label class="relative flex items-center gap-4 h-full m-0 cursor-text">
			<i class="fi-rr-search text-xl text-gray-400 absolute top-1/2 w-16 -translate-y-1/2 lg:right-8 lg:w-auto"></i>
			<input class="text-field h-full text-sm p-0 pr-16 pl-5 bg-transparent !border-transparent rounded-none border-0 capitalize lg:pr-18 lg:pl-8" type="search" id="search" name="search" placeholder="جستجو در محصولات فارسگیمر">
		</label>
	</form>
</OutClick>
