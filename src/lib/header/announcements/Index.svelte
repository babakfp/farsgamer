<script>
	import { browser } from '$app/env'
	import { navigating } from '$app/stores'
	import OutClick from 'svelte-outclick'
	import Item from './Item.svelte'
	import { announcements } from '$store/announcements.js'

	let isOpen = false
	let toggle

	$: browser && isOpen && window.addEventListener('scroll', _=> isOpen = false)
	$: $navigating && (isOpen = false)
</script>

<div class="2xs:relative">
	<!-- Header btn -->
	<button
		bind:this={toggle}
		on:click={_=> isOpen = !isOpen}
		class="h-full flex items-center px-2 duration-100 hover:text-brand sm:px-2.5" title="مشاهده اعلانات"
	>
		<div class="relative">
			<i class="fi-rr-bell sm:text-xl"></i>
			{#if $announcements.length > 0}
				<div class="absolute flex items-center justify-center -right-1 -top-1 bg-red-400 text-white leading-0 w-3.5 h-3.5 rounded-full text-2xs">2</div>
			{/if}
		</div>
	</button>

	<OutClick on:outclick={_=> isOpen = false} excludeByDOMNode={[toggle]}>
		<div easytab class:hidden={!isOpen} class="z-40 absolute inset-x-4 top-full -mt-2 overflow-hidden bg-white border border-gray-100 rounded-sm 2xs:left-0 2xs:right-auto 2xs:w-80 xs:w-88" style="box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%)">

			<div class="flex items-center justify-between p-3 border-b border-gray-100 text-sm">
				<span>اعلانات</span>
				<a class="text-xs link" href="/dashboard/announcements">مشاهده همه</a>
			</div>

			<div class="py-2">
				{#if $announcements.length > 0}
					<ul class="max-h-66 scrollbar">
						{#each $announcements as item}
							<Item {...item} />
						{/each}
					</ul>
				{:else}
					<p class="h-22 flex items-center justify-center text-sm text-center text-gray-500">چیزی پیدا نشد.</p>
				{/if}
			</div>
		</div>
	</OutClick>
</div>
