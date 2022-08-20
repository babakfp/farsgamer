<script>
  import { Form, Input } from '$components/Form'
</script>

<Form class="grid gap-8 p-4 sm:grid-cols-2" let:isFormValid>
  <Input name="firstname" />
  <Input name="lastname" />
  <Input type="username" />
  <Input type="phone" />
  <Input type="email" />

  <div class="col-span-full">
    <button class="btn btn--brand btn--submit px-8" type="submit" disabled={!isFormValid}>ثبت اطلاعات</button>
  </div>
</Form>
