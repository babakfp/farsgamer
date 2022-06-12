<script>
  import { setContext, getContext } from 'svelte'

  let itemsLen = getContext('itemsLen')
  setContext('itemsLen', $itemsLen + 1)

  export let className = null
	export { className as class }
</script>

<carousel-card class={className}>
  {$itemsLen}
  <slot />
</carousel-card>

<style>
  carousel-card {
    display: block;
    width: 100%;
  }
</style>
