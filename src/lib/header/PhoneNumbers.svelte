<script>
	import phoneNumbers from '$store/phone-numbers.js'
</script>

<div class="hidden xss:grid xs:flex xs:gap-2 h-full justify-items-end text-left text-sm tracking-wider px-4 ml-4 border-l border-gray-100">
	<!-- main call line -->
	<a class="h-full flex items-end duration-100 hover:text-brand xs:items-center" href="tel:{$phoneNumbers[0]}" title="تماس تلفنی مستقیم">{$phoneNumbers[0]}</a>

	<i class="fi-rr-minus hidden opacity-50 xs:flex"></i>
	<a class="h-full flex items-top duration-100 hover:text-brand xs:items-center" href="tel:{$phoneNumbers[1]}" title="تماس تلفنی مستقیم">{$phoneNumbers[1]}</a>
</div>
