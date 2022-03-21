<li>
	<button class="easytab__tab flex items-center justify-center gap-2 w-full min-w-36 p-4 text-sm font-bold rounded-t duration-200 ease-in-out lg:hover:text-brand">
		<slot />
	</button>
</li>

<style lang="postcss">
	li :global(.easytab__tab.active) {
		@apply relative pb-8 -mb-4 bg-white text-brand;

		&::after {
			content: "";
			@apply absolute bottom-4 inset-x-0 border-b border-gray-100 border-dashed;
		}
	}
</style>
