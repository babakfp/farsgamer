<!-- https://discord.com/channels/457912077277855764/941716615920230430 -->

<script>
	import { onMount } from 'svelte'
	export let title

	let AccordionGroup

	onMount(_=> {
		const Accordions = AccordionGroup.querySelectorAll('.Accordion')

		Accordions.forEach(Accordion => {
			Accordion.querySelector('.Accordion-Toggle').addEventListener('click', e => {
				Accordion.classList.toggle('Accordion--Active')

				// Remove the active class from the previous active Accordion
				Accordions.forEach(AccordionScoped => {
					if (e.currentTarget !== AccordionScoped.querySelector('.Accordion-Toggle') && AccordionScoped.className.includes('Accordion--Active')) {
						AccordionScoped.classList.remove('Accordion--Active')
					}
				})
			})
		})
	})
</script>

<li bind:this={AccordionGroup} class="AccordionGroup grid gap-2 sm:flex sm:gap-4">
			
	<!-- Title -->
	<div class="sm:relative sm:w-6 sm:min-w-6 sm:max-w-6">
		<p class="font-bold sm:absolute sm:-rotate-90 sm:origin-top-right sm:mr-6 sm:whitespace-nowrap sm:bg-gray-100">{ title }</p>
		<div class="hidden sm:block -z-1 absolute w-px h-full right-1/2 translate-x-1/2 bg-gray-200"></div>
	</div>

	<!-- Accordions -->
	<ol class="grid gap-2">
		<slot />
	</ol>

</li>
