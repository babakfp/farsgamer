<script>
  import { Form, FormInput } from '$components/Form'
</script>

<Form class="grid gap-8 p-4 sm:grid-cols-2">
  <FormInput name="firstname" />
  <FormInput name="lastname" onlyFarsiLetters={true} />
  <FormInput type="username" />
  <FormInput type="phone" />
  <FormInput type="email" />

  <div class="col-span-full">
    <button class="btn btn--brand btn--submit px-8" type="submit">ثبت اطلاعات</button>
  </div>
</Form>
