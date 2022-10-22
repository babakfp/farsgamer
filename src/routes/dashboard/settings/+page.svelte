<script>
  import { Form, Input } from '$components/Form'
</script>

<svelte:head>
	<title>تنظیمات حساب</title>
</svelte:head>

<Form class="grid gap-8 p-4 sm:grid-cols-2" let:isFormValid>
  <Input name="firstname" />
  <Input name="lastname" />
  <Input type="username" />
  <Input type="tel" />
  <Input type="email" />

  <div class="col-span-full">
    <button class="btn btn--brand btn--submit px-8" type="submit" disabled={!isFormValid}>ثبت اطلاعات</button>
  </div>
</Form>
