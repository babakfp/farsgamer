<script>
	import { Tab, TabButton, TabContent } from 'Tab'
</script>

<Tab>
  <TabButton>Tab 1</TabButton>
  <TabButton>Tab 2</TabButton>
  <TabButton>Tab 3</TabButton>

  <svelte:fragment slot="TabContent">
		<TabContent>Content 1</TabContent>
    <TabContent>Content 2</TabContent>
    <TabContent>Content 3</TabContent>
  </svelte:fragment>

  <!-- <svelte:slot name="TabContent">
    <TabContent>Content 1</TabContent>
    <TabContent>Content 2</TabContent>
    <TabContent>Content 3</TabContent>
  </svelte:slot> -->
</Tab>
