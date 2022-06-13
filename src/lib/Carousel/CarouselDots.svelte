<script>
  import { getContext } from 'svelte'

  export let classDots = null
  export let classDot = null

  const cardsLen = getContext('cardsLen')
  const activeCardIndex = getContext('activeCardIndex')
</script>

<carousel-dots class="mt-8 {classDots}">
	{#each [...Array($cardsLen).keys()] as i}
    <carousel-dot
      class={classDot}
      on:click={_=> $activeCardIndex = i}
      type="button"
      data-is-active={$activeCardIndex === i ? 'true' : 'false'}
    />
  {/each}
</carousel-dots>

<style lang="postcss">
  carousel-dots {
    @apply flex;
  }
  
  carousel-dot {
    @apply flex items-center justify-center w-6 h-6 duration-200;
    @apply hover:after:bg-brand;
    @apply after:w-full after:h-full after:scale-25 after:bg-gray-200 after:rounded-full after:duration-200;
  }
</style>
