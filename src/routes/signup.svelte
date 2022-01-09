<!-- Page Title -->
<h1 class="mb-8 text-2xl font-bold">ثبت نام در فارس گیمر</h1>

<!-- SignUp/Register form -->
<form action="/">

  <!-- Phone Number -->
  <label class="font-semibold mr-2" for="phone-number">شماره همراه</label>
  <div class="relative mb-4">
    <input
      type="tel"
      name="phone-number"
      id="phone-number"
      placeholder="شماره همراه"
      class="text-field"
      autocomplete="tel"
    >
    <!-- Icon - IR Flag -->
    <svg class="absolute left-4 inset-y-center w-4 h-4">
      <use xlink:href="#svg-iran-flag"></use>
    </svg>
  </div>
  
  <!-- UserName -->
  <label class="font-semibold mr-2" for="username">نام کاربری</label>
  <input
    type="text"
    name="username"
    id="username"
    placeholder="نام کاربری"
    class="text-field"
    autocomplete="username"
  >

  <!-- Submit the Form -->
  <button class="btn btn-xl w-full form-submit btn-brand mt-4 font-semibold" type="submit">ثبت نام</button>

</form>

<!-- Direct to SignIn/Login page -->
<p class="mt-8">
  <span>حساب کاربری دارید؟</span>
  <a class="link font-semibold" href="/signin">وارد شوید</a>
</p>