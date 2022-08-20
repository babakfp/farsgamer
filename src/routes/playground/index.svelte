<script>
	import { Form, Checkbox, RadioboxWrapper, Radiobox } from './_lib'
</script>

<Form let:isFormValid>
	<Checkbox name="terms-and-conditions">
		قوانین و مقررات
	</Checkbox>

	<RadioboxWrapper name="something" required={true}>
		<Radiobox value="hey1">سلام</Radiobox>
		<Radiobox value="hey2">سلام</Radiobox>
		<Radiobox value="hey3">سلام</Radiobox>
	</RadioboxWrapper>

	<button class="btn btn--brand" type="submit">Submit ({isFormValid})</button>
</Form>
