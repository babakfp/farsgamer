<script>
  import { Form, FormInput } from '$components/Form'
  let isFormValid
</script>

<Form class="grid gap-8 p-4 sm:grid-cols-2" bind:isFormValid>
  <FormInput name="firstname" />
  <FormInput name="lastname" />
  <FormInput type="username" />
  <FormInput type="phone" />
  <FormInput type="email" />

  <div class="col-span-full">
    <button class="btn btn--brand btn--submit px-8" type="submit" disabled={!isFormValid}>ثبت اطلاعات</button>
  </div>
</Form>
