<script>
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'
  import CarouselArrowNext from './CarouselArrowNext.svelte'
  import CarouselArrowPrev from './CarouselArrowPrev.svelte'

  export let className = null
	export { className as class }
  export let classWrapper = null

  export let gap

  let wrapper
  let cards
  let translateX = '0px'
  let direction

  const cardsLen = writable(69)
  setContext('cardsLen', cardsLen)

  const activeCardIndex = writable(0)
  setContext('activeCardIndex', activeCardIndex)
  
  // const printTranslateXBasedOnWrapperDirection = translateX => {
  //   if (!wrapper) return
  //   const direction = getComputedStyle(wrapper).direction
  //   return direction === 'rtl' ? translateX : `-${translateX}`
  // }
  
  $: if (wrapper) {
    cards = wrapper.querySelectorAll('carousel-card')
    cardsLen.set(cards.length)
    direction = getComputedStyle(wrapper).direction
    
    cards.forEach((card, i) => {
      
      // Because then the user won't be able to see the rest of the slide anymore.
      if (card.offsetWidth > wrapper.offsetWidth) {
        card.style.maxWidth = `${wrapper.offsetWidth}px`
      }

      card.style.minWidth = `${wrapper.offsetWidth}px`
    })
  }

  $: $activeCardIndex, (_=>{
    if (wrapper) {
      if ($activeCardIndex === 0) {
        translateX = 0
      } else {
        if (direction === 'rtl') {
          translateX = `calc( (${cards[$activeCardIndex].offsetWidth}px * ${$activeCardIndex}) + (${gap} * ${$activeCardIndex}) )`
        } else {
          translateX = `calc( (-${cards[$activeCardIndex].offsetWidth}px * ${$activeCardIndex}) + (-${gap} * ${$activeCardIndex}) )`
        }
      }
    }
  })();
</script>

<carousel class={className}>

  <carousel-wrapper bind:this={wrapper} class={classWrapper}
    style="
      transform: translateX({translateX});
      gap: {gap};
    "
  >
    <slot />
  </carousel-wrapper>

  <slot name="arrows">
    <carousel-arrows class="block mt-8">
      <CarouselArrowNext />
      <CarouselArrowPrev />
    </carousel-arrows>
  </slot>

</carousel>

<ul class="mt-8 list-inside list-disc">
  <li>activeCardIndex: {$activeCardIndex}</li>
  <li>cardsLen: {$cardsLen}</li>
</ul>

<style>
  carousel {
    display: block;
    width: 100%;
  }

  carousel-wrapper {
    position: relative;
    display: flex;
    width: 100%;
    transition-duration: .3s;
    transition-property: transform;
  }
</style>
