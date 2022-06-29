<script>
  // Geting it from the parent components
	import { getContext } from 'svelte'
  const isFormValid = getContext('isFormValid')

  // Custom classes
	export let classField = ''
	export let classLabel = ''
	export let classWrapper = ''

	export let name = ''
	export let label = ''
	export let placeholder = ''
	export let autocomplete = ''

	export let value = ''
	export let minLen = null
	export let maxLen = null
	export let isValid = true
  
  // Min and Max
  $: {
    if (minLen && value < minLen) value = minLen
    if (maxLen && value > maxLen) value = maxLen
  }

  let errors = {
    onlyNumbers: {
      isTriggered: false,
      errorMessage: 'فقط اعداد انگلیسی مجاز است.',
    },
  }

  $: if (value) {

    if ( value.match(/\D/g) ) {
      value = value.replace(/\D/g, '')
      isValid = false
      errors.onlyNumbers.isTriggered = true
    } else {
      isValid = true
      errors.onlyNumbers.isTriggered = false
    }

  }

  const onFocus =_=> {
    if (value === '') {
      value = '09'
    }
  }
</script>

<div
  class="
    {classWrapper ? `[ ${classWrapper} ]` : ''}
    {isValid ? '[ valid ]' : '[ invalid ]'}
    [ w-full ]
    "
  >

  {#if label}
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label
      class="
        {classLabel ? `[ ${classLabel} ]` : ''}
        [ text-sm ]
      "
      for={name}
    >
      {label}
    </label>
  {/if}

  <input
    class="
      [ FormText ]
      {classField ? `[ ${classField} ]` : ''}
      {value !== '' ? 'dir-ltr' : ''}
    "
    type=tel
    {name}
    id={name}
    {label}
    {placeholder}
    {autocomplete}
    bind:value={value}
    maxlength=11
    on:focus={onFocus}
  />

  <!-- Errors list -->
  {#if !isValid}
    <ul class="mt-2 mr-1 list-inside list-disc text-xs text-red-700">
      {#each Object.entries(errors) as [_, values]}
        {#if values.isTriggered}
          <li>{values.errorMessage}</li>
        {/if}
      {/each}
    </ul>
  {/if}

</div>

<style lang="postcss">
  .FormText {
    @apply
      w-full h-input px-4
      bg-white
      rounded border-2 border-gray-200
      ring-3 ring-gray-200 ring-opacity-0
      font-dana-en
      duration-150 ease-in
      placeholder:text-gray-400 placeholder:text-sm
      focus:ring-opacity-100
    ;
  }
</style>
