<script>
	import { Form, Checkbox, RadioboxWrapper, Radiobox } from './_lib'
</script>

<Form>
	<Checkbox name="terms-and-conditions">
		قوانین و مقررات
	</Checkbox>

	<RadioboxWrapper name="something" required={true}>
		<Radiobox value="hey1">سلام</Radiobox>
		<Radiobox value="hey2">سلام</Radiobox>
		<Radiobox value="hey3">سلام</Radiobox>
	</RadioboxWrapper>

	<button type="submit">submit</button>
</Form>
