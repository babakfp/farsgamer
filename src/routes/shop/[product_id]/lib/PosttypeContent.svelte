<script>
	import Tabs from './Tabs.svelte'
	import Description from '$lib/posttype/Description.svelte'
	import Comment from '$lib/posttype/Comment.svelte'
	import CommentForm from '$lib/posttype/CommentForm.svelte'

	import * as QAACommentWithReply from './question-and-answer/CommentWithReply.svelte'
	import * as QAACommentForm from './question-and-answer/CommentForm.svelte'
</script>

<section class="posttype-content">
	<Tabs />

  <div>

    <!--
      Description
      Without any extra wrappers, place the description inside this element
    -->
    <div easytab-content>
      <div class="posttype-content__description">
        <Description />
      </div>
    </div>

    <!-- Comments -->
    <div easytab-content>
      <div class="posttype-content__comments">

				<!-- No comments. -->
        <!-- <div class="grid gap-2 justify-center justify-items-center py-4">
					<img class="w-60" src="/svg/no-comments.svg" alt="No comments">
					<p class="font-bold md:text-md lg:text-2xl text-red">هیچکس نظرشو نگفته</p>
				</div> -->

				<Comment />
				<CommentForm />
      </div>
    </div>

    <!-- Question and Answer -->
    <div easytab-content>
      <div class="posttype-content__question-and-answer">

				<!-- No questions. -->
        <!-- <div class="grid gap-2 justify-center justify-items-center py-4">
					<img class="w-60" src="/svg/no-questions.svg" alt="No questions">
					<p class="font-bold md:text-md lg:text-2xl text-red">هیچکس سوالی نداشته</p>
				</div> -->

				<QAACommentWithReply />
				<QAACommentForm />
      </div>
    </div>

  </div>
  
</section>