<script>
  import CarouselArrow from './CarouselArrow.svelte'

  export let activeCardIndex
  export let lengthOfItems

  const scrollToNextSlide =_=> {
    if (activeCardIndex < lengthOfItems - 1) {
			activeCardIndex += 1
		}
  }
</script>

<slot>
  <CarouselArrow class="carousel-arrow-next" on:click={scrollToNextSlide} disabled={activeCardIndex === lengthOfItems - 1}>
    <slot name="svg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 12a2 2 0 0 0-.59-1.4l-4.29-4.3a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42L15 11H5a1 1 0 0 0 0 2h10l-3.29 3.29a1 1 0 0 0 1.41 1.42l4.29-4.3A2 2 0 0 0 18 12Z"/></svg>
    </slot>
  </CarouselArrow>
</slot>
