<script>
	import { onMount } from 'svelte'
	import { Tab, TabLabel, TabPanel } from '$components/Tab'
	import CommentItem from '../_lib/CommentItem.svelte'
	import CommentWithReply from '../_lib/CommentWithReply.svelte'

	onMount(()=> {
		const accordions = document.querySelectorAll('.accordion')
		accordions.forEach(item => {
			const btn = item.querySelector('.accordion-btn')
			const body = item.querySelector('.accordion-body')
			btn.addEventListener('click', ()=> {
				accordions.forEach(_item => {
					if (item !== _item) {
						_item.querySelector('.accordion-body').classList.add('hidden')
					}
				})
				body.classList.toggle('hidden')
			})
		})
	})
</script>

<svelte:head>
	<title>نظرات من</title>
</svelte:head>

<Tab>
	<svelte:fragment slot="tab">
		<TabLabel title="در انتظار ثبت نظر" hash="waiting-for-comments" />
		<TabLabel title="نظرات تایید شده" hash="verified-comments" />
	</svelte:fragment>

	<svelte:fragment slot="body">
		<TabPanel hash="waiting-for-comments">
			<div class="grid gap-4">
				<CommentItem />
				<CommentItem />
      </div>
		</TabPanel>
		<TabPanel hash="verified-comments">
      <div class="grid gap-4">
				<CommentWithReply />
      </div>
		</TabPanel>
	</svelte:fragment>
</Tab>
