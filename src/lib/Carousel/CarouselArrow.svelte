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
  :global(body.rtl .carousel-arrow) {
    @apply scale-x-flip;
  }
</style>
