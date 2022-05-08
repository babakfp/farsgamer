<script>
	import { onMount } from 'svelte'
	import Rating from '$lib/Rating.svelte'
	import CommentWithReply from './_lib/CommentWithReply.svelte'

	let easytab
	onMount(_=> new EasyTab(easytab))
</script>

<section bind:this={easytab} class="easytab">

  <ul class="flex items-center overflow-y-auto border-b border-gray-200 mb-4">
    <li class="easytab__tab border-b-2 border-transparent py-3 px-6">در انتظار ثبت نظر</li>
    <li class="easytab__tab border-b-2 border-transparent py-3 px-6">نظرات تایید شده</li>
  </ul>

  <div>

    <div class="easytab__panel">
      <div class="grid gap-4">
        <!-- START Item -->
          <div class="dashboard-comment-awaiting-approval bg-gray-50 rounded p-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <img class="w-20 h-20 rounded" src="/img/products/product-thumb (1).png" alt>
                <h3 class="font-bold leading-4">گیف کارد steam</h3>
              </div>

							<!-- TOOD  btn--xs-->
							<!-- TODO icon + or - -->
              <button class="btn btn--brand btn--xs gap-1" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false">
                <i class="icon-plus-small text-sm leading-0"></i>
                <span>ثبت نظر</span>
              </button>
            
            </div>
            <div id="collapseExample" class="mt-4 collapse">
              <form class="bg-white rounded p-4 md:p-6" action="">
                <h4 class="font-bold">ثبت نظر</h4>
                <p class="text-sm">اگر در سفارش شما تاخیر یا مشکلی پیش اومده باشه, لطفا با پشتیبانی تماس بگیرید. همکاران ما ۲۴ ساعته آماده کمک به شما هستند.</p>
                <textarea class="input mt-4" rows="4" placeholder="نظر خود را وارد نمایید"></textarea>
                
                <div class="flex flex-wrap items-center justify-between mt-4 gap-2">

                  <!-- Rating -->
                  <div class="flex items-center gap-4">
                    <p class="text-sm">میزان رضایت شما از این سفارش چه مقدار است؟</p>
										<Rating />
                  </div>

                  <!-- Submit the review -->
							<!-- TOOD  btn--xs-->
                  <button type="submit" class="btn btn--brand btn--xs">ثبت نظر</button>

                </div>

              </form>
            </div>
          </div>
        <!-- END Item -->
      </div>
    </div>

    <div class="easytab__panel">
      <div class="grid gap-4">
				<CommentWithReply />
      </div>
    </div>

  </div>

</section>

<style lang="postcss">
	:global(.easytab__tab.active) {
		@apply border-brand;
	}
</style>
