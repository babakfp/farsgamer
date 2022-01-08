<ul class="flex items-center justify-center gap-2 mt-12">
	<li>
		<button class="pg-btn pg-btn--prev-next">
			<i class="fi-rr-angle-double-small-right"></i>
		</button>
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
	<li>
		<button class="pg-btn pg-btn--prev-next">
			<i class="fi-rr-angle-double-small-left"></i>
		</button>
	</li>
</ul>

<style lang="postcss">
	.pg-btn {
		@apply flex items-center justify-center w-10 h-10 text-gray-500 rounded-sm duration-200 ease-in-out;
	}

	.pg-btn--prev-next,
	.pg-btn--num {
		@apply bg-gray-200 hover:bg-brand hover:text-white;
	}

	.pg-btn--num-active {
		@apply bg-brand text-white pointer-events-none;
	}
</style>
