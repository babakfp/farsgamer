<script>
	export let title
	export let link
	export let linkTitle
</script>

<section>
  <div class="flex items-center justify-between mb-4 mt-8 lg:mt-10">
		<h2 class="font-bold text-lg">{ title }</h2>
		{#if link}
			<a class="btn btn--sm btn--outline btn--brand" href={ link }>
				<span>{ linkTitle || 'مشاهده همه' }</span>
				<i class="icon-angle-left"></i>
			</a>
		{/if}
  </div>

	<slot />
</section>
