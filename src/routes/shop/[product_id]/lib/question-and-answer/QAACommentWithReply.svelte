<script>
	import StarRating from '$lib/StarRating.svelte'
	import CommentReplyForm from './CommentReplyForm.svelte'
</script>

<div class="comment comment--reply">

  <div class="comment__head">
    <div class="comment__info">

      <!-- Date -->
      <div class="comment__date">
        <span class="comment__date-day">29</span>
        <span class="comment__date-month">اسفند</span>
      </div>

      <div class="comment__user">
        <!-- user f and l name -->
        <span class="comment__user-name">حسن کچل</span>

				<StarRating />
      </div>
      
    </div>

    <!-- Tags -->
    <div class="comment__tags">
      <span class="comment__tag">اسکین</span>
      <span class="comment__tag">خریدار</span>
    </div>

  </div>
  <div class="comment__body">
    <div class="comment__content">
      <div class="comment__content-icon">
        <i class="icon-question"></i>
      </div>

      <!-- actual content of the comment -->
      <p class="comment__message">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
      
      <!--
        Reply button
        if instead of a button tag, an "a" tag needed, you can easily change the tag name and add the href attribute ;)
      -->
      <button class="comment__reply-btn">پاسخ به پرسش</button>
      
			<CommentReplyForm />
    </div>
    <!--
      This component itselfs goes here as a reply ;)
    -->
    <div class="comment">
      <div class="comment__head">
        <div class="comment__info">
    
          <!-- Date -->
          <div class="comment__date">
            <span class="comment__date-day">29</span>
            <span class="comment__date-month">اسفند</span>
          </div>
    
          <div class="comment__user">
            <!-- user f and l name -->
            <span class="comment__user-name">حسن کچل</span>
    
						<StarRating />
          </div>
          
        </div>
    
        <!-- Tags -->
        <div class="comment__tags">
          <span class="comment__tag">اسکین</span>
          <span class="comment__tag">خریدار</span>
        </div>
    
      </div>
      <div class="comment__body">
        <div class="comment__content">
          <div class="comment__content-icon">
            <i class="icon-question"></i>
          </div>
    
          <!-- actual content of the comment -->
          <p class="comment__message">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          
        </div>
        <!--
          This component itselfs goes here as a reply ;)
        -->
      </div>
    </div>
  </div>
</div>