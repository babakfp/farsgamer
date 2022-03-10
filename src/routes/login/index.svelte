<script>
	import { goto } from '$app/navigation'

	import Form from '$lib/form/Form.svelte'
	import Input from '$lib/Input.svelte'
	import Checkbox from '$lib/Checkbox.svelte'

	let state = 'first'
</script>

<svelte:head>
	<title>ورود به حساب</title>
</svelte:head>

<div class="max-w-sm mx-auto">
	<h2 class="text-lg font-bold">ورود به حساب</h2>
	
	{#if state === 'first'}
		<Form class="space-y-6 mt-4 p-6 bg-white rounded" on:submit={_=> state = 'second'}>
			<Input label="شماره موبایل" class="dir-ltr" type="tel" name="phone" autocomplete="tel" placeholder="09..." />
			<Checkbox name="rememberme">مرا به خاطر داشته باش</Checkbox>
			<button class="btn btn--submit btn--brand w-full">ادامه فرایند ثبت‌نام</button>
		</Form>
	{/if}

	{#if state === 'second'}
		<Form class="space-y-6 mt-4 p-6 bg-white rounded" on:submit={_=> goto('/dashboard')}>
			<div>
				<label for="code">کد تایید</label>
				<input class="input text-center tracking-3" type="number" name="code" minlength="5" maxlength="5" placeholder="_ _ _ _ _">
				<!-- <small class="form-field__description">کد تایید ارسال شده به تلفن همراه خود را وارد کنید.</small> -->
				<!-- <small class="form-field__error">کد تایید وارد شده, نادرست می‌باشد.</small> -->
			</div>

			<button class="btn btn--submit btn--brand w-full">تایید کد</button>

			<div class="text-sm text-center">
				<span>ارسال مجدد کد بعد از</span> <time>(2:00)</time>
			</div>
		</Form>
	{/if}

</div>
