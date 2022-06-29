<script>
  import { Form, FormText, FormPhone } from '$components/Form'
</script>

<Form class="grid gap-8 p-4 sm:grid-cols-2">
  <FormText onlyFarsiLetters={true} name="firstname" placeholder="نام" />
  <FormText onlyFarsiLetters={true} name="lastname" placeholder="نام خانوادگی" />
  <FormText FieldLtr={true} onlyUsername={true} name="username" placeholder="نام کاربری" />
  <FormPhone name="phone" placeholder="شماره همراه" />
  <input class="input" type="email" name="email" id="email" placeholder="ایمیل">
  
  <div class="col-span-full">
    <button class="btn btn--brand btn--submit px-8" type="submit">ثبت اطلاعات</button>
  </div>
</Form>
