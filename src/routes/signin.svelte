<!-- Page Title -->
<h1 class="mb-8 text-2xl font-bold">ورود به فارس گیمر</h1>

<!-- SignIn/Login form -->
<form action="/">
  
  <!-- Phone Number -->
  <label class="font-semibold" for="phone-number mr-2">شماره همراه</label>
  <div class="relative mb-4">
    <input
      type="tel"
      name="phone-number"
      id="phone-number"
      placeholder="شماره همراه"
      class="text-field"
      autocomplete="tel"
    >
    <svg class="absolute left-4 inset-y-center w-4 h-4">
      <use xlink:href="#svg-iran-flag"></use>
    </svg>
  </div>

  <!-- Remember Me -->
  <div class="checkbox checkbox--brand">
    <input
      type="checkbox"
      name="rememberme"
      id="rememberme"
      class="checkbox__field"
    >
    <label for="rememberme" class="checkbox__label text-sm">مرا به خاطر داشته باش</label>
  </div>

  <!-- Submit the Form -->
  <button class="btn btn-xl w-full form-submit btn-brand mt-4 font-semibold" type="submit">ورود</button>

</form>

<!-- Direct to SignUP page -->
<p class="mt-8">
  <span>حساب کاربری ندارید؟ </span>
  <a class="link font-semibold" href="/signup">ثبت نام</a>
</p>
