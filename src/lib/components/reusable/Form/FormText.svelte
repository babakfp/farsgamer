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
  
	export let FieldLtr = false
  
	export let onlyFarsiLetters = false
	export let onlyUsername = false

  // Farsi letters, whitespace and halfspace
  const regexOnlyFarsiLetters = /^[\u0622\u0627\u0628\u067E\u062A\u062B\u062C\u0686\u062D\u062E\u062F\u0630\u0631\u0632\u0698\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063A\u0641\u0642\u06A9\u06AF\u0644\u0645\u0646\u0648\u0647\u06CC\u0649\u0626\u06BA\u066E\u06A1\u066F\u200C\s]+$/
  const regexOnlyUsername = /^[a-zA-Z0-9]+$/

  // Min and Max
  $: {
    if (minLen && value < minLen) value = minLen
    if (maxLen && value > maxLen) value = maxLen
  }

  let errors = {
    onlyFarsiLetters: {
      isTriggered: false,
      errorMessage: 'فقط حروف فارسی, فاصله و نیم‌فاصله مجاز است.',
    },
    onlyUsername: {
      isTriggered: false,
      errorMessage: 'فقط حروف و اعداد انگلیسی مجاز است.',
    },
  }

  $: if (value) {

    if (onlyFarsiLetters) {
      if (regexOnlyFarsiLetters.test(value)) {
        isValid = true
        errors.onlyFarsiLetters.isTriggered = false
      } else {
        isValid = false
        errors.onlyFarsiLetters.isTriggered = true
      }
    }

    if (onlyUsername) {
      if (regexOnlyUsername.test(value)) {
        isValid = true
        errors.onlyUsername.isTriggered = false
      } else {
        isValid = false
        errors.onlyUsername.isTriggered = true
      }
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
      {FieldLtr && value ? 'dir-ltr' : ''}
    "
    type=text
    {name}
    id={name}
    {label}
    {placeholder}
    {autocomplete}
    bind:value={value}
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
