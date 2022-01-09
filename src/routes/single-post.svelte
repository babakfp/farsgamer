<script>
	import Breadcrumb from '$lib/Breadcrumb.svelte'
	import Description from '$lib/posttype/Description.svelte'
	import Comment from '$lib/posttype/Comment.svelte'
	import CommentForm from '$lib/posttype/CommentForm.svelte'
</script>

<Breadcrumb />

<!-- START Hero -->
<section class="P-4 overflow-hidden rounded-2xl bg-white lg:p-8">

  <div class="bg-gray-50 rounded-2xl grid gap-4 p-4 sm:flex sm:items-center">

    <!-- Post Image -->
    <img class="w-full rounded-2xl sm:w-52" src="/images/post.png">
    
    <div class="grid gap-4 px-2 sm:h-full sm:content-between lg:py-2 lg:px-0">

      <!-- Post Title -->
      <h1 class="text-lg font-bold">آموزش لینک کردن پلی استیشن به اپیک گیمز (بروز رسانی شد)</h1>
      
      <ul class="text-gray-500 text-sm">
        <li>تاریخ: <span>14 مهر 1399</span></li>
        <li>نویسنده: <span>مدیریت فارس گیمر</span></li>
      </ul>

    </div>
  </div>


  <div class="posttype-content__description mt-4 p-4 px-6 lg:px-2">
		<Description />
  </div>

</section>
<!-- END Hero -->


<section class="posttype-content">

  <ul class="posttype-content__tabs">

    <!-- Comments tab -->
    <li easytab-tab class="posttype-content__tab">
      <a class="posttype-content__tab-link">
        <i class="posttype-content__tab-icon icon-filter"></i>
        <span>نظرات <span class="text-sm">(۹۸)</span></span>
      </a>
    </li>

  </ul>

  <div>

    <div easytab-content>
      <!-- Comments wrapped here -->
      <div class="posttype-content__comments">
				<Comment />
				<CommentForm />
      </div>
    </div>

  </div>

</section>