<script>
	import { browser } from '$app/environment'
	import { navigating } from '$app/stores'
	import OutClick from 'svelte-outclick'
	import Item from './Item.svelte'
	import { announcements } from '$store/announcements.js'

	let isOpen = false
	let toggle

	$: browser && isOpen && window.addEventListener('scroll', ()=> isOpen = false)
	$: $navigating && (isOpen = false)
</script>

<div class="3xs:relative">
	<!-- Header btn -->
	<button
		bind:this={toggle}
		on:click={()=> isOpen = !isOpen}
		class="h-full flex items-center px-2 text-gray-600 duration-100 hover:text-brand sm:px-2.5" title="مشاهده اعلانات"
	>
		<div class="relative">
			<i class="icon-bell xs:text-lg xl:text-xl" />
			
			{#if $announcements.length > 0}
				<div class="absolute flex items-center justify-center -right-1 -top-1 w-3.5 h-3.5 text-2xs bg-red-400 text-white rounded-full">
					{$announcements.length}
				</div>
			{/if}
		</div>
	</button>

	<OutClick on:outclick={()=> isOpen = false} excludeByDomNode={[toggle]}>
		<div class:hidden={!isOpen} class="z-20 absolute inset-x-4 top-full -mt-2 overflow-hidden bg-white border border-gray-100 rounded-sm 3xs:left-0 3xs:right-auto 3xs:w-80 xs:w-88" style="box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%)">

			<div class="flex items-center justify-between p-3 border-b border-gray-100 text-sm">
				<span>اعلانات</span>
				<a class="text-xs link" href="/dashboard/announcements">مشاهده همه</a>
			</div>

			<div class="py-2">
				{#if $announcements.length > 0}
					<ul class="max-h-66 scrollbar">
						{#each $announcements as announcement}
							<Item {...announcement} />
						{/each}
					</ul>
				{:else}
					<p class="h-22 flex items-center justify-center text-sm text-center text-gray-500">چیزی پیدا نشد.</p>
				{/if}
			</div>
		</div>
	</OutClick>
</div>
