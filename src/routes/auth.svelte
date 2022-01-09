<svelte:head>
	<title>ورود به حساب</title>
</svelte:head>

<div class="max-w-3xl mx-auto">
	<h2 class="text-lg font-bold">ورود به حساب</h2>

	<form class="space-y-6 mt-4 p-6 bg-white rounded">
		
		<div>
			<label for="phone">شماره موبایل</label>
			<input class="text-field dir-ltr" type="tel" name="phone" autocomplete="tel" placeholder="09..." />
		</div>

		<div class="checkbox checkbox--brand">
			<input class="checkbox__field" type="checkbox" name="rememberme" id="rememberme">
			<label for="rememberme" class="checkbox__label text-sm">مرا به خاطر داشته باش</label>
		</div>

		<button class="btn btn--submit btn--brand w-full">ورود به حساب</button>

	</form>
</div>
