<script>
	import { phoneNumbers } from '$store/global.js'
</script>

<section class="grid gap-4">
	<div>
		<div class="font-bold">ساعات کاری:</div>
		<div>
			<span class="font-bold">شنبه تا پنجشنبه:</span>
			<span>۲۴ ساعت روز</span>
		</div>
		<div>
			<span class="font-bold">جمعه ها:</span>
			<span>15:00 الی 21:00</span>
		</div>
	</div>
	
	<div>
		<span class="font-bold">آدرس شرکت:</span>
		<span>چهار راه 17 شهریور  - بالای شیرینی فروشی دانژه طبقه دوم</span>
	</div>
	
	<div>
		<span class="font-bold">شماره تماس:</span>
		<span class="inline-flex gap-2 justify-items-end tracking-wider">
			<!-- main call line -->
			<a class="duration-100 hover:text-brand focus:text-brand" href="tel:{$phoneNumbers[0]}" title="تماس تلفنی مستقیم">{$phoneNumbers[0]}</a>
		
			<i class="icon-minus opacity-50"></i>
			<a class="duration-100 hover:text-brand focus:text-brand" href="tel:{$phoneNumbers[1]}" title="تماس تلفنی مستقیم">{$phoneNumbers[1]}</a>
		</span>
	</div>
	
	<div>
		<span class="font-bold">آدرس ایمیل:</span>
		<a class="duration-100 hover:text-brand focus:text-brand" href="mail:info@farsgamer.com" title="ارسال ایمیل">Info@FarsGamer.com</a>
	</div>
</section>
