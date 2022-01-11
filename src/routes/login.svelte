<svelte:head>
	<title>ورود به حساب</title>
</svelte:head>

<div class="max-w-xl mx-auto">
	<h2 class="text-lg font-bold">ورود به حساب</h2>

	<form class="space-y-6 mt-4 p-6 bg-white rounded">
		
		<div>
			<label for="phone">شماره موبایل</label>
			<input class="input dir-ltr" type="tel" name="phone" autocomplete="tel" placeholder="09..." />
		</div>

		<div class="checkbox checkbox--brand">
			<input class="checkbox__field" type="checkbox" name="rememberme" id="rememberme">
			<label for="rememberme" class="checkbox__label text-sm">مرا به خاطر داشته باش</label>
		</div>

		<button class="btn btn--submit btn--brand w-full">ورود به حساب</button>

	</form>

	<!--  -->

	<form class="space-y-6 mt-4 p-6 bg-white rounded">

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

	</form>
	
</div>
