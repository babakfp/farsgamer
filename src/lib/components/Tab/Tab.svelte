<script>
	import { onMount } from 'svelte'
	import { page } from '$app/stores'

	export let className = ''
	export { className as class }

	export let activeIndex = 0

	let Tab
	onMount(_=> {

		const TabLabels = Tab.querySelectorAll('.Tab__TabLabel')
		const TabPanels = Tab.querySelectorAll('.Tab__TabPanel')
		let TabItemsLength

		if (TabLabels.length === 0) throw new Error('No <TabLabel /> found!')
		if (TabPanels.length === 0) throw new Error('No <TabPanel /> found!')
		if (TabLabels.length !== TabPanels.length) throw new Error('<TabLabel /> and <TabPanel /> length must be the same!')
		TabItemsLength = TabLabels.length

		// Active by default
		TabLabels[activeIndex].classList.add('Tab--active')
    TabPanels[activeIndex].classList.add('Tab--active')

		const inactivateAllItems =_=> {
			for (let i = 0; i < TabItemsLength; i++) {
					TabLabels[i].classList.remove('Tab--active')
					TabPanels[i].classList.remove('Tab--active')
				}
		}

		const activateItem = (itemIndex) => {
			inactivateAllItems()
			TabLabels[itemIndex].classList.add('Tab--active')
			TabPanels[itemIndex].classList.add('Tab--active')
		}

		for (let i = 0; i < TabItemsLength; i++) {

			if ( $page.url.hash && TabPanels[i].id && (TabPanels[i].id === $page.url.hash.replace('#', '')) ) {
				activateItem(i)
				activeIndex = i
				TabPanels[i].scrollIntoView()
			}

			TabLabels[i].addEventListener('click', _=> {
				if (TabLabels[i].classList.contains('active') && TabPanels[i].classList.contains('Tab--active')) return
				activateItem(i)
				activeIndex = i
			})

		}

	})
</script>

<div class="Tab {className}" bind:this={Tab}>
	<nav>
		<ul class="tabs flex items-center pb-2 -mb-2 scrollbar-x scrollbar-x-spacing-lg overflow-y-hidden">
			<slot name="tab" />
		</ul>
	</nav>

	<slot name="body" />
</div>

<style lang="postcss">
	.tabs::-webkit-scrollbar-thumb { @apply bg-gray-200 }
	.Tab :global(.Tab__TabLabel) { @apply whitespace-nowrap }
	.Tab :global(.Tab__TabPanel) { @apply hidden }
	.Tab :global(.Tab__TabPanel.Tab--active) { @apply block }
</style>
