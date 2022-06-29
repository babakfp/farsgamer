<script>
  import { Form, FormText } from '$components/Form'
  
  let isFormValid
  $: if ($isFormValid) {
    console.log($isFormValid)
  }
</script>

<Form bind:isFormValid={isFormValid}>
  <FormText onlyFarsiLetters={true} placeholder="نام" />
</Form>
