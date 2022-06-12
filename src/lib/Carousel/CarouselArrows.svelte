<script>
  export let activeCardIndex
  export let lengthOfItems

  const scrollToNextSlide =_=> {
    if (activeCardIndex < lengthOfItems - 1) {
			activeCardIndex += 1
		}
  }

  const scrollToPrevSlide =_=> {
		if (activeCardIndex > 0) {
			activeCardIndex -= 1
		}
  }
</script>

<carousel-arrows class="block mt-8">

  <button class="carousel-arrow-next" on:click={scrollToNextSlide} disabled={activeCardIndex === lengthOfItems - 1}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 12a2 2 0 0 0-.59-1.4l-4.29-4.3a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42L15 11H5a1 1 0 0 0 0 2h10l-3.29 3.29a1 1 0 0 0 1.41 1.42l4.29-4.3A2 2 0 0 0 18 12Z"/></svg>
  </button>

  <button class="carousel-arrow-prev" on:click={scrollToPrevSlide} disabled={activeCardIndex === 0}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 11H9l3.29-3.29a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0l-4.29 4.3A2 2 0 0 0 6 12a2 2 0 0 0 .59 1.4l4.29 4.3a1 1 0 1 0 1.41-1.42L9 13h10a1 1 0 0 0 0-2Z"/></svg>
  </button>

</carousel-arrows>

<style lang="postcss">
  .carousel-arrow-next,
  .carousel-arrow-prev {
    @apply btn btn--gray w-10 px-0;
  }
</style>
