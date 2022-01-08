<ul class="flex items-center justify-center gap-2 mt-12">
	<li class="flex items-center gap-2">
		<button class="pg-btn pg-btn--prev-next">
			<i class="fi-rr-angle-double-small-right"></i>
		</button>
		<hr class="h-8 border-t-0 border-r-2 border-gray-200">
	</li>
	<li>
		<ul class="flex gap-2">
			<li>
				<a class="pg-btn pg-btn--num" href="javascript:">1</a>
			</li>
			<li>
				<a class="pg-btn pg-btn--num pg-btn--num-active" href="javascript:">2</a>
			</li>
			<li class="pg-btn">
				<i class="fi-rr-menu-dots"></i>
			</li>
			<li>
				<a class="pg-btn pg-btn--num" href="javascript:">9</a>
			</li>
		</ul>
	</li>
	<li class="flex items-center gap-2">
		<hr class="h-8 border-t-0 border-r-2 border-gray-200">
		<button class="pg-btn pg-btn--prev-next">
			<i class="fi-rr-angle-double-small-left"></i>
		</button>
	</li>
</ul>

<style lang="postcss">
	.pg-btn {
		@apply flex items-center justify-center w-10 h-10 text-gray-500 rounded-sm duration-300 ease-in-out;
	}

	.pg-btn--prev-next,
	.pg-btn--num {
		@apply hover:bg-gray-200;
	}

	.pg-btn--num-active {
		@apply text-brand font-bold pointer-events-none;
	}
</style>
