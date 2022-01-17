<script>
	import CommentWithReply from '$lib/new-folder/CommentWithReply.svelte'
	import { onMount } from 'svelte'

	onMount(_=> {
		easyTab(document.querySelector('.dashboard-comments'))
		
		document.querySelector('#dashboard-comments-rate-product').barrating(
			'show', {
				theme: 'fontawesome-stars',
				reverse: true,
				fastClicks: true,
				hoverState: false,
			}
		)
	})
</script>

<section class="dashboard-comments">

  <ul class="dashboard-comments__tabs">
    <li easytab-tab class="dashboard-comments__tab">در انتظار ثبت نظر</li>
    <li easytab-tab class="dashboard-comments__tab">نظرات تایید شده</li>
  </ul>

  <div>

    <div easytab-content>
      <div class="grid gap-4">
        <!-- START Item -->
          <div class="dashboard-comment-awaiting-approval bg-gray-50 rounded p-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <img class="w-20 h-20 rounded" src="/images/product-grid.png">
                <h3 class="font-semibold leading-4">گیف کارد steam</h3>
              </div>

							<!-- TOOD  btn--xs-->
              <button class="btn btn--brand btn--xs" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false">
                <i class="icon-plus text-sm hidden leading-0"></i>
                <span>ثبت نظر</span>
              </button>
            
            </div>
            <div id="collapseExample" class="mt-4 collapse">
              <form class="bg-white rounded p-4 md:p-6" action="">
                <h4 class="font-semibold">ثبت نظر</h4>
                <p class="text-sm">اگر در سفارش شما تاخیر یا مشکلی پیش اومده باشه, لطفا با پشتیبانی تماس بگیرید. همکاران ما ۲۴ ساعته آماده کمک به شما هستند.</p>
                <textarea class="input w-full mt-4 h-auto resize-y" rows="4" placeholder="نظر خود را وارد نمایید"></textarea>
                
                <div class="flex flex-wrap items-center justify-between mt-4 gap-2">

                  <!-- Rating -->
                  <div class="flex items-center gap-4">
                    <p class="text-sm">میزان رضایت شما از این سفارش چه مقدار است؟</p>
                    <div class="stars dashboard-comments-rate">
                      <select id="dashboard-comments-rate-product" name="?" autocomplete="off">
                        <option value="1" data-html="مزخرف">1</option>
                        <option value="2" data-html="بد">2</option>
                        <option value="3" data-html="قابل قبول">3</option>
                        <option value="4" data-html="خوب">4</option>
                        <option value="5" data-html="عالی">5</option>
                      </select>
                    </div>
                  </div>

                  <!-- Submit the review -->
							<!-- TOOD  btn--xs-->
                  <button type="submit" class="btn btn--brand btn--xs">ثبت نظر</button>

                </div>

              </form>
							<!-- Error -->
              <!-- <div class="flex items-center gap-2 text-sm text-red p-2 mt-2">
                <i class="icon-exclamation-square"></i>
                <p>میزان رضایت خود را وارد نمایید</p>
              </div> -->
            </div>
          </div>
        <!-- END Item -->
      </div>
    </div>

    <div easytab-content>
      <div class="grid gap-4">
				<CommentWithReply />
      </div>
    </div>

  </div>

</section>
