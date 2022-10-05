<script>
	import { phoneNumbers } from '$store/global.js'
</script>

<div class="hidden 2xs:grid sm:flex sm:gap-2 h-full justify-items-end text-left text-sm tracking-wider px-4 ml-4 border-l border-gray-100">
	<a class="h-full flex items-center pt-3 duration-100 hover:text-brand sm:pt-0" href="tel:{$phoneNumbers[0]}" title="تماس تلفنی مستقیم">{$phoneNumbers[0]}</a>
	<i class="icon-minus hidden opacity-50 sm:flex" />
	<a class="h-full flex items-center pb-2 duration-100 hover:text-brand sm:pb-0" href="tel:{$phoneNumbers[1]}" title="تماس تلفنی مستقیم">{$phoneNumbers[1]}</a>
</div>
