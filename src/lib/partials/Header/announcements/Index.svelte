<script>
	import { browser } from '$app/environment'
	import { navigating } from '$app/stores'
	import OutClick from 'svelte-outclick'
	import Item from './Item.svelte'
	import { announcements } from '$store/announcements.js'
	import LeftItem from '../LeftItem.svelte'

	let isOpen = false
	let toggle

	$: browser && isOpen && window.addEventListener('scroll', ()=> isOpen = false)
	$: $navigating && (isOpen = false)
</script>

<div class="3xs:relative">
	
	<LeftItem bind:ref={toggle} tag="button" icon="icon-bell" title="مشاهده اعلانات" count={$announcements.length} on:click={()=> isOpen = !isOpen} />
	
	<OutClick on:outclick={()=> isOpen = false} excludeByDomNode={[toggle]}>
		<div class="z-20 absolute inset-x-4 top-full -mt-2 overflow-hidden bg-white border border-gray-100 rounded-sm duration-150 hide -translate-y-8 {isOpen && 'show !translate-y-0'} 3xs:left-0 3xs:right-auto 3xs:w-80 xs:w-88" style="box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%)">

			<div class="flex items-center justify-between p-3 border-b border-gray-100 text-sm">
				<span>اعلانات</span>
				<a class="link text-xs | -ml-3 -my-3 pl-3 py-3" href="/dashboard/announcements">مشاهده همه</a>
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
