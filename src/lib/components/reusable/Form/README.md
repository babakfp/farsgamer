In parent component:

```html
<script>
  import { Form } from '$components/Form'
  let isFormValid
  $: if ($isFormValid) {
    console.log($isFormValid)
  }
</script>

<Form bind:isFormValid={isFormValid} />
```
