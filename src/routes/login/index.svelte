<script>
	import { login } from '$store/auth.js'

	import Input from '$lib/Input.svelte'
	import Checkbox from '$lib/Checkbox.svelte'
</script>

<svelte:head>
	<title>ورود به حساب</title>
</svelte:head>

<div class="max-w-sm mx-auto">
	<h2 class="text-lg font-bold">ورود به حساب</h2>

	<form class="space-y-6 mt-4 p-6 bg-white rounded">
		
		<Input
			label="شماره موبایل"
			class="dir-ltr" type="tel" name="phone" autocomplete="tel" placeholder="09..."
		/>

		<Checkbox name="rememberme">مرا به خاطر داشته باش</Checkbox>

		<button class="btn btn--submit btn--brand w-full">ادامه فرایند ثبت‌نام</button>
	</form>

	<!--  -->

	<form class="space-y-6 mt-4 p-6 bg-white rounded">

		<div>
			<label for="code">کد تایید</label>
			<input class="input text-center tracking-3 input-no-arrows" type="number" name="code" minlength="5" maxlength="5" placeholder="_ _ _ _ _">
			<!-- <small class="form-field__description">کد تایید ارسال شده به تلفن همراه خود را وارد کنید.</small> -->
			<!-- <small class="form-field__error">کد تایید وارد شده, نادرست می‌باشد.</small> -->
		</div>

		<button class="btn btn--submit btn--brand w-full">تایید کد</button>

		<div class="text-sm text-center">
			<span>ارسال مجدد کد بعد از</span> <time>(2:00)</time>
		</div>

	</form>

	<button class="btn btn--submit btn--brand w-full mt-4" on:click={login}>ورود مستقیم</button>

</div>
