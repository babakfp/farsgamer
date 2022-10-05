<script>
	export let title
	export let href = ''
</script>

<section>
  <div class="flex items-center justify-between mb-4">
		<h2 class="font-semibold sm:font-bold sm:text-lg">{title}</h2>
		{#if href}
			<a class="btn btn--sm btn--gray btn--outline gap-2 h-8 px-2.5" {href}>
				<span class="text-xs">مشاهده همه</span>
				<i class="icon-angle-double-small-left !text-xs" />
			</a>
		{/if}
  </div>

	<slot />
</section>
