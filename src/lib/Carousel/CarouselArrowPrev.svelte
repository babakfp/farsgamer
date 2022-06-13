<script>
  import { getContext } from 'svelte'
  import CarouselArrow from './CarouselArrow.svelte'

  export let className = null
	export { className as class }

  const activeCardIndex = getContext('activeCardIndex')

  const scrollToPrevSlide =_=> {
		if ($activeCardIndex > 0) {
			activeCardIndex.update(currentValue => currentValue - 1)
		}
  }
</script>

<CarouselArrow class="carousel-arrow-prev {className}" on:click={scrollToPrevSlide} disabled={$activeCardIndex === 0}>
  <slot>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 11H9l3.29-3.29a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0l-4.29 4.3A2 2 0 0 0 6 12a2 2 0 0 0 .59 1.4l4.29 4.3a1 1 0 1 0 1.41-1.42L9 13h10a1 1 0 0 0 0-2Z"/></svg>
  </slot>
</CarouselArrow>
