<script>
	import OutClick from 'svelte-outclick'
	import { isOpen, close } from '$store/header-search.js'
</script>

<OutClick on:outclick={close} excludeByQuerySelector={['.js-header-search-toggle']}>
	<form class="hidden {$isOpen && '!block'} absolute h-16 top-full -mt-2 inset-x-4 rounded-sm bg-white border-y border-gray-100 sm:w-full sm:max-w-md sm:right-auto lg:max-w-full lg:block lg:w-full lg:h-full lg:mt-0 lg:border-l lg:border-t-0 lg:border-b-0 lg:static lg:top-auto lg:inset-x-auto lg:bg-transparent lg:!shadow-none" style="box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%)">
		<label class="relative flex items-center gap-4 h-full m-0 cursor-text">
			<i class="fi-rr-search text-xl text-gray-400 absolute top-1/2 w-16 -translate-y-1/2 lg:right-8 lg:w-auto"></i>
			<input class="h-full text-sm p-0 pr-16 pl-5 bg-transparent capitalize lg:pr-18 lg:pl-8" type="search" id="search" name="search" placeholder="جستجو در محصولات فارسگیمر">
		</label>
	</form>
</OutClick>
