<script>
	import { phoneNumbers } from '$store/global.js'
</script>

<section class="grid gap-4 text-sm sm:grid-cols-2 2xl:grid-cols-4 2xl:gap-12">
	<div class="space-y-2">
		<div class="font-semibold">ساعات کاری</div>
		<ol class="list-inside list-disc space-y-1">
			<li class="text-gray-400">
				<span class="font-medium text-gray-700">شنبه تا پنج‌شنبه:</span>
				<span class="text-gray-700">۲۴ ساعت روز</span>
			</li>
			<li class="text-gray-400">
				<span class="font-medium text-gray-700">جمعه‌ها:</span>
				<span class="text-gray-700">15:00 الی 21:00</span>
			</li>
		</ol>
	</div>
	
	<div class="space-y-2">
		<span class="font-semibold">آدرس شرکت</span>
		<p>چهار راه 17 شهریور  - بالای شیرینی فروشی دانژه طبقه دوم</p>
	</div>
	
	<div class="space-y-2">
		<span class="font-semibold">شماره تماس</span>
		<div class="flex gap-2 justify-items-end tracking-wider">
			<!-- main call line -->
			<a class="link" href="tel:{$phoneNumbers[0]}" title="تماس تلفنی مستقیم">{$phoneNumbers[0]}</a>
		
			<i class="icon-minus opacity-50" />
			<a class="link" href="tel:{$phoneNumbers[1]}" title="تماس تلفنی مستقیم">{$phoneNumbers[1]}</a>
		</div>
	</div>
	
	<div class="space-y-2">
		<div class="font-semibold">آدرس ایمیل</div>
		<a class="link inline-block font-code" href="mail:farsgamer@gmail.com" title="ارسال ایمیل">FarsGamer@gmail.com</a>
	</div>
</section>
