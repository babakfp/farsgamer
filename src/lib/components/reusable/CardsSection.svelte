<script>
	export let title
	export let href = ''
</script>

<section>
  <div class="flex items-center justify-between mb-4">
		<h2 class="font-semibold sm:font-bold sm:text-lg">{title}</h2>
		{#if href}
			<a class="btn btn--sm btn--gray btn--outline gap-2" {href}>
				<span>مشاهده همه</span>
				<i class="icon-angle-double-small-left !text-sm"></i>
			</a>
		{/if}
  </div>

	<slot />
</section>
