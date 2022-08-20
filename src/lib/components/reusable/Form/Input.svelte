<script>
	import { getContext, onMount } from 'svelte'

  // Custom classes
	export let classField = ''
	export let classLabel = ''
	export let classContainer = ''
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
	export let required = false
	export let errorMessage = false
	export let successMessage = false
	
	export let alignLTR = false

	export let onlyFarsiLetters = false

	let field
  let onlyNumbers = false
  let isEmailRegexActivated = false

	const fieldsValidations = getContext('fieldsValidations')

	$: {
		fieldsValidations.update(currentValue => {
			currentValue[name] = isValid
			return currentValue
		})
	}

	if (type === 'coupon') {
    if (placeholder === '') placeholder = 'کد تخفیف'
		minLen = 6
		maxLen = 6
	}

  if (type === 'phone') {
    tagType = 'tel'
    if (name === '') name = 'phone'
    if (placeholder === '') placeholder = 'شماره همراه'
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
    if (placeholder === '') placeholder = 'نام'
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

	if (type === 'password') {
    if (placeholder === '') placeholder = 'رمز عبور'
    if (autocomplete === '') autocomplete = 'password'
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
      errorMessage: 'فقط حروف(کوچک و بزرگ) انگلیسی مجاز است.',
      regex: /^[a-zA-Z]+$/,
    },
		onlyCoupon: {
      isActivated: type === 'coupon' ? true : false,
      isTriggered: false,
      errorMessage: 'فقط حروف و اعداد انگلیسی مجاز است.',
      regex: /^[a-zA-Z0-9]+$/,
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

        if ((value === '') && (required === false)) {
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

	const handleKeydown = e => {
		if (type === 'password') {
			if (e.ctrlKey && e.code === 'KeyX') {
				value = value.slice(0, field.selectionStart) + value.slice(field.selectionEnd)
			}
		}
	}
</script>

<div
  class="
    {classContainer ? `[ ${classContainer} ]` : ''}
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

  <div class="relative {classWrapper}">

		<input
			class="
				[ input ]
				{classField ? `[ ${classField} ]` : ''}
				{alignLTR && value ? 'dir-ltr' : ''}
				{(type === 'coupon') && value && 'dir-ltr'}
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
			on:keydown={handleKeydown}
			bind:this={field}
		/>

		<slot />
	</div>

	<p class="text-xs text-gray-500 mt-1">
		<slot name="description" />
	</p>

  <!-- Errors list -->
  {#if !isValid || minmaxErrors.length > 0 || errorMessage || successMessage}
    <ul class="mt-1 mr-1 list-inside list-disc text-xs">
      {#each Object.entries(errors) as [_, values]}
        {#if values.isTriggered}
          <li class="text-red-500">{values.errorMessage}</li>
        {/if}
      {/each}
      {#each minmaxErrors as text}
        <li class="text-red-500">{text}</li>
      {/each}
			{#if errorMessage}
				<li class="text-red-500">{errorMessage}</li>
			{/if}
			{#if successMessage}
				<li class="text-green-500">{successMessage}</li>
			{/if}
    </ul>
  {/if}

</div>
