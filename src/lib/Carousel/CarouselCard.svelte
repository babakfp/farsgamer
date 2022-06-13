<script>
  export let className = null
	export { className as class }
</script>

<carousel-card class={className}>
  <slot />
</carousel-card>

<style>
  carousel-card {
    display: block;
    width: 100%;
  }
</style>
