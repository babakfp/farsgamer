<script>
	import { page } from '$app/stores'

  // '<route>': <Layout Component>
  export let layouts = {}
  export let defaultLayout = null

  // Use `defaultLayout` if route layout isn't set.
  $: layout = layouts[$page.url.pathname] ?? defaultLayout
</script>

{#if layout}

  <svelte:component this={layout}>
    <slot />
  </svelte:component>

{:else}

  <slot />

{/if}
