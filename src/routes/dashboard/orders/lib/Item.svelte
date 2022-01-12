<script>
	import TrackContent from './TrackContent.svelte'
</script>

<div class="do__item">

  <div class="do__item-cell-list">
    <!-- code -->
    <div class="do__item-cell do__item-cell__code">
      <div class="font-semibold text-sm flex">
        <p class="font-isans-ed select-all">FFA-980317</p>
        <p class="text-gray2-700">#</p>
      </div>
    </div>

    <!-- date -->
    <div class="do__item-cell do__item-cell__date">
      <div class="date-box">
        <p class="date-box__day">29</p>
        <p class="date-box__month">اوردیبهشت</p>
      </div>
    </div>

    <!-- price -->
    <div class="do__item-cell do__item-cell__price">
      <div class="grid gap-1">
        <div class="flex items-center gap-1 whitespace-nowrap">
          <p class="font-semibold">100,000</p>
          <p class="text-sm">تومان</p>
        </div>
        <p class="text-2xs">(برای ۲ عدد)</p>
      </div>
    </div>

    <!-- status -->
    <!-- <div class="do__item-cell do__item-cell__status">
      <span class="font-semibold">پرداخت شده</span>
    </div> -->

    <!-- delivered -->
    <!-- <div class="do__item-cell do__item-cell__delivered"> -->
      <!-- Button trigger modal -->
							<!-- TOOD  btn--xs-->
      <!-- <button class="btn px-8 btn--brand btn--xs btn--outline" data-bs-toggle="modal" data-bs-target="#orderNotCompleted">
        سفارش انجام نشده؟
      </button>
      <%# include('./unsuccessful-order-modal.ejs') %>
    </div> -->

    <!-- buttons -->
    <div class="do__item-cell do__item-cell__buttons">
      <div class="grid gap-1">
							<!-- TOOD  btn--xs-->
        <a href="javascript:" class="btn px-8 btn--brand btn--xs btn--outline w-full">نمایش</a>
							<!-- TOOD  btn--xs-->
        <button class="btn px-8 btn--brand btn--outline btn--xs w-full" data-bs-toggle="collapse" data-bs-target="#collapseDoItem1" aria-expanded="false" aria-controls="collapseExample">
          <i class="icon-plus text-sm hidden leading-0"></i>
          <span>پیگیری <span class="text-2xs">(2 پیام جدید)</span></span>
        </button>
      </div>
    </div>
  </div>
  
	<TrackContent />
</div>