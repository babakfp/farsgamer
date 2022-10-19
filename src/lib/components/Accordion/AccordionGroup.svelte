<script>
	import { onMount } from 'svelte'
	export let title

	let AccordionGroup

	onMount(_=> {
		const Accordions = AccordionGroup.querySelectorAll('.Accordion')

		Accordions.forEach(Accordion => {
			Accordion.querySelector('.Accordion-Toggle').addEventListener('click', ()=> {
				Accordion.classList.toggle('Accordion--Active')
			})
		})
	})
</script>

<li bind:this={AccordionGroup} class="AccordionGroup grid gap-2 sm:flex sm:gap-4">
			
	<!-- Title -->
	<div class="sm:relative sm:w-6 sm:min-w-6 sm:max-w-6">
		<p class="font-bold sm:absolute sm:-rotate-90 sm:origin-top-right sm:mr-6 sm:px-1 sm:pl-2 sm:-translate-x-0.5 sm:whitespace-nowrap sm:bg-gray-100">{title}</p>
		<div class="hidden sm:block -z-1 absolute w-px h-full right-1/2 translate-x-1/2 bg-gray-200"></div>
	</div>

	<!-- Accordions -->
	<ol class="grid gap-2">
		<slot />
	</ol>

</li>
