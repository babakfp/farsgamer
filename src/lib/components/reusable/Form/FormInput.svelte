<script>
  // Geting it from the parent components
	import { getContext, onMount } from 'svelte'
  const allFormValidations = getContext('allFormValidations')
  
  const ref = Math.random()
  onMount(_=> {
    allFormValidations.update(currentValue => {
      currentValue[ref] = true
      return currentValue
    })
  })

  $: {
    allFormValidations.update(currentValue => {
      currentValue[ref] = isValid
      return currentValue
    })
  }

  // Custom classes
	export let classField = ''
	export let classLabel = ''
	export let classWrapper = ''

  // text | username
	export let type = 'text'
  let tagType = type
	export let name = ''
  let tagName = name
	export let value = ''
	export let label = ''
	export let placeholder = ''
	export let autocomplete = ''

	export let minLen = null
	export let maxLen = 64
	export let isValid = true
	export let isRequired = false

	export let alignLTR = false

	export let onlyFarsiLetters = false

  let onlyNumbers = false
  let isEmailRegexActivated = false

  if (type === 'phone') {
    tagType = 'tel'
    if (name === '') name = 'phone'
    if (placeholder === '') placeholder = 'شماره همراه'
    if (!onlyNumbers) onlyNumbers = true
    onlyNumbers = true
    if (!minLen) minLen = 11
    maxLen = 11
  }

  if (type === 'phone' || type === 'username') alignLTR = true

  if (type === 'username') {
    tagName = 'username'
    if (placeholder === '') placeholder = 'نام کاربری'
    if (autocomplete === '') autocomplete = 'username'
    if (!minLen) minLen = 2
    if (!maxLen) maxLen = 12
  }
  
  if (name === 'firstname') {
    if (placeholder === '') placeholder = 'نام کاربری'
    if (autocomplete === '') autocomplete = 'given-name'
  }
  if (name === 'lastname') {
    if (placeholder === '') placeholder = 'نام خانوادگی'
    if (autocomplete === '') autocomplete = 'family-name'
  }
  if (name === 'firstname' || name === 'lastname') {
    if (!onlyFarsiLetters) onlyFarsiLetters = true
    if (!minLen) minLen = 2
    if (!maxLen) maxLen = 32
  }

  if (type === 'email') {
    if (placeholder === '') placeholder = 'آدرس ایمیل'
    if (autocomplete === '') autocomplete = 'email'
    isEmailRegexActivated = true
    if (!minLen) minLen = 2
    if (!maxLen) maxLen = 64
  }

  let minmaxErrors = []
  const minErrorText = `حداقل ${minLen} کاراکتر مورد نیاز است.`
  const maxErrorText = `حداکثر ${minLen} کاراکتر مجاز است.`

  let errors = {
    onlyFarsiLetters: {
      isActivated: onlyFarsiLetters,
      isTriggered: false,
      errorMessage: 'فقط حروف فارسی, فاصله و نیم‌فاصله مجاز است.',
      regex: /^[\u0622\u0627\u0628\u067E\u062A\u062B\u062C\u0686\u062D\u062E\u062F\u0630\u0631\u0632\u0698\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063A\u0641\u0642\u06A9\u06AF\u0644\u0645\u0646\u0648\u0647\u06CC\u0649\u0626\u06BA\u066E\u06A1\u066F\u200C\s]+$/,
    },
    onlyUsername: {
      isActivated: type === 'username' ? true : false,
      isTriggered: false,
      errorMessage: 'فقط حروف(کوچک و پزرگ) انگلیسی مجاز است.',
      regex: /^[a-zA-Z]+$/,
    },
    onlyNumbers: {
      isActivated: onlyNumbers,
      isTriggered: false,
      errorMessage: 'فقط اعداد انگلیسی مجاز است.',
      regex: /[0-9]/,
    },
    email: {
      isActivated: isEmailRegexActivated,
      isTriggered: false,
      errorMessage: 'ایمیل معتبر نمی‌باید.',
      regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
  }

  $: {

    for (const [key, _] of Object.entries(errors)) {
      if (errors[key].isActivated) {

        if (errors[key].regex.test(value)) {
          errors[key].isTriggered = false
        } else {
          errors[key].isTriggered = true
        }

        if ((value === '') && (isRequired === false)) {
          errors[key].isTriggered = false
        }
      }
    }

    for (const [key, _] of Object.entries(errors)) {
      if (errors[key].isTriggered === true) {
        isValid = false
        break
      } else {
        isValid = true
      }
    }

    if (isValid === true) {
      if (minmaxErrors.length > 0) {
        isValid = false
      }
    }

  }

  const handleInput = e => {
    // in here, you can switch on type and implement whatever behaviour you need
    value = type.match(/^(number|range)$/)
      ? +e.target.value
      : e.target.value

    // ---

    minmaxErrors = []

    if (minLen && value.length < minLen) {
      minmaxErrors = [...minmaxErrors, minErrorText]
    }
    if (maxLen && value.length > maxLen) {
      minmaxErrors = [...minmaxErrors, maxErrorText]
    }
  };

  const remove_first_and_last_empty_space =_=> {
    if ( value.charAt(value.length - 1) === ' ' ) {
      value = value.slice(0, -1)
    }

    if ( value.charAt(0) === ' ' ) {
      value = value.slice(1)
    }
  }

  const onBlur =_=> {
    remove_first_and_last_empty_space()
  }

  const onFocus =_=> {
    if (type === 'phone' && value === '') {
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
      for={tagName}
    >
      {label}
    </label>
  {/if}

  <input
    class="
      [ FormInput ]
      {classField ? `[ ${classField} ]` : ''}
      {alignLTR && value ? 'dir-ltr' : ''}
    "
    type={tagType}
    name={tagName}
    id={tagName}
    {label}
    {placeholder}
    {autocomplete}
    {value}
    on:input={handleInput}
    on:blur={onBlur}
    on:focus={onFocus}
    minlength={minLen}
    maxlength={maxLen}
  />

  <!-- Errors list -->
  {#if !isValid || minmaxErrors.length > 0}
    <ul class="mt-2 mr-1 list-inside list-disc text-xs text-red-700">
      {#each Object.entries(errors) as [_, values]}
        {#if values.isTriggered}
          <li>{values.errorMessage}</li>
        {/if}
      {/each}
      {#each minmaxErrors as text}
        <li>{text}</li>
      {/each}
    </ul>
  {/if}

</div>

<style lang="postcss">
  .FormInput {
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
