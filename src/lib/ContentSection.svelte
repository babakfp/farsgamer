<script>
	export let title
	export let href = null
</script>

<section>
  <div class="flex items-center justify-between mb-4">
		<h2 class="font-bold text-lg">{title}</h2>
		{#if href}
			<a class="btn btn--sm btn--outline btn--brand" {href}>
				<span>مشاهده همه</span>
				<i class="fi-rr-angle-left !text-xs"></i>
			</a>
		{/if}
  </div>

	<slot />
</section>
