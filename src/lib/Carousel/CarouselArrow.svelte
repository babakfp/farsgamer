<script>
  export let className = null
	export { className as class }
  export let disabled
</script>

<button class="carousel-arrow {className}" on:click {disabled}>
  <slot></slot>
</button>

<style lang="postcss">
  .carousel-arrow {
    @apply btn btn--gray w-10 px-0;
  }
  /* TODO: We shouldn't use global styles. I'm waiting for a better CSS scope feature. What if the developer uses the slot to remove the SVG? */
  :global(body.rtl .carousel-arrow svg) {
    @apply scale-x-flip;
  }
</style>
