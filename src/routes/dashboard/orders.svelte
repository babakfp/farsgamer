<div class="do">
  <div class="do__head">
    <div class="do__head-cell do__item-cell__code">کد سفارش</div>
    <div class="do__head-cell do__item-cell__date">تاریخ</div>
    <div class="do__head-cell do__item-cell__price">قیمت</div>
    <!-- <div class="do__head-cell do__item-cell__status">وضعیت</div> -->
    <!-- <div class="do__head-cell do__item-cell__delivered">زمان تکمیل سفارش</div> -->
    <div class="do__head-cell do__item-cell__buttons">پیگیری</div>
  </div>
  
  <div class="do__item-list">
    <%- include('./orders/item.ejs') %>
  </div>
</div>