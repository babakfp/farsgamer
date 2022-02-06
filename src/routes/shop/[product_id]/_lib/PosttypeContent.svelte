<script>
	import { onMount } from 'svelte'
	import Tabs from './Tabs.svelte'
	import Description from '$lib/posttype/Description.svelte'
	import Comment from '$lib/posttype/Comment.svelte'
	import CommentForm from '$lib/posttype/CommentForm.svelte'
	import QAACommentWithReply from './question-and-answer/QAACommentWithReply.svelte'
	import QAACommentForm from './question-and-answer/QAACommentForm.svelte'

	onMount(_=> {
		const posttypeContent = document.querySelector('.posttype-content')
		easyTab(posttypeContent)
	})
</script>

<section class="posttype-content">
	<Tabs />

	<div class="rounded overflow-hidden">
		<div easytab-content>
			<Description />
		</div>

		<div easytab-content>
			<div class="posttype-content__comments">

				<!-- No comments. -->

				<Comment />
				<CommentForm />
			</div>
		</div>

		<div easytab-content>
			<div class="posttype-content__question-and-answer">

				<!-- No questions. -->

				<QAACommentWithReply />
				<QAACommentForm />
			</div>
		</div>
	</div>
</section>