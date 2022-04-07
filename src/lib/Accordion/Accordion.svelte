<script>
	export let title
</script>

<li class="grid Accordion">
	
	<button class="Accordion-Toggle flex items-center justify-between w-full p-4 bg-white border-2 border-gray-200 rounded duration-150 hover:text-brand">
		<span class="line-clamp-1 text-sm lg:text-base">{title}</span>
		<i class="fg-caret-down text-gray-300"></i>
	</button>

	<div class="Accordion-Body relative -z-1 -mt-4 duration-300 ease-in-out">
		<div class="p-4 pt-8 bg-white border-2 border-gray-200 rounded-b text-sm">
			<slot />
		</div>
	</div>

</li>

<style lang="postcss">
	:global(.Accordion:not(.Accordion--Active)) .Accordion-Body {
		@apply h-0 overflow-hidden pointer-events-none;
	}
</style>
