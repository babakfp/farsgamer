<script>
	import { onMount } from 'svelte'
	import OutClick from 'svelte-outclick'
	import Item from './Item.svelte'
	import { publicAnnouncements, userAnnouncements } from '$store/announcements.js'

	let isOpen = false

	onMount(_=> {
		const menu = document.querySelector('.announcements__menu')
		easyTab(menu)
	})
</script>

<div class="relative">
	<!-- Header btn -->
	<button
		on:click={_=> isOpen = !isOpen}
		class="js-announcements-toggle-btn h-full flex items-center px-2.5 duration-100 hover:text-brand" href="/cart" title="مشاهده اعلانات"
	>
		<div class="relative">
			<i class="fi-rr-bell text-xl"></i>
			{#if $publicAnnouncements.length > 0 || $userAnnouncements.length > 0}
				<div class="absolute flex items-center justify-center -right-1 -top-1 bg-red-400 text-white leading-0 w-3.5 h-3.5 rounded-full text-2xs">2</div>
			{/if}
		</div>
	</button>

	<OutClick on:outclick={_=> isOpen = false} exclude={['.js-announcements-toggle-btn']}>
		<div easytab class:hidden={!isOpen} class="announcements__menu absolute left-0 top-full mt-4 w-82 z-40 rounded overflow-hidden bg-white border border-gray-100 sm:w-100">

			<ul class="flex justify-center border-b border-gray-100">
				<li easytab-tab>عمومی</li>
				<li easytab-tab>برای شما</li>
			</ul>

			<div class="py-2">
				<div easytab-content>
					{#if $publicAnnouncements.length > 0}
						<ul class="max-h-66 overflow-y-auto">
							{#each $publicAnnouncements as item}
								<Item {...item} />
							{/each}
						</ul>
					{:else}
						<p class="h-22 flex items-center justify-center text-sm text-center text-gray-500">چیزی پیدا نشد.</p>
					{/if}
				</div>

				<div easytab-content>
					{#if $userAnnouncements.length > 0}
						<ul class="max-h-66 overflow-y-auto">
							{#each $userAnnouncements as item}
								<Item {...item} />
							{/each}
						</ul>
					{:else}
						<p class="h-22 flex items-center justify-center text-sm text-center text-gray-500">چیزی پیدا نشد.</p>
					{/if}
				</div>
			</div>
		</div>
	</OutClick>
</div>

<style lang="postcss" global>
	.announcements__menu {
		box-shadow: 0 32px 32px rgba(0, 0, 0, .05);
	}
	.announcements__menu li[easytab-tab] {
		@apply block w-full border-b -mb-px border-transparent py-3 text-sm text-gray-400 text-center;
	}
	.announcements__menu li[easytab-tab].active {
		@apply border-brand text-brand;
	}
</style>
