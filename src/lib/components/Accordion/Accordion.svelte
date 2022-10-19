<script>
	export let title
</script>

<li class="Accordion grid overflow-hidden rounded">
	
	<button class="Accordion-Toggle flex items-center justify-between w-full p-4 bg-white border-2 border-gray-200 rounded duration-150 focus-visible:ring-1 focus-visible:ring-brand/75 focus-visible:border-brand/75">
		<span class="line-clamp-1 text-sm lg:text-base">{title}</span>
		<i class="icon-caret-down text-gray-300" />
	</button>

	<div class="Accordion-Body relative -z-1 -mt-4 transition-all duration-300 ease-in-out">
		<div class="p-4 pt-8 bg-white border-2 border-gray-200 rounded-b text-sm">
			<slot />
		</div>
	</div>

</li>

<style lang="postcss">
	:global(.Accordion:not(.Accordion--Active)) .Accordion-Body {
		@apply -mt-[100vh];
	}
</style>
