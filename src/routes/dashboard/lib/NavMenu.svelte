<script>
	import NavItem from '$lib/sidebar/NavItem.svelte'
	let show = false
</script>

<div class="{show ? 'h-auto mb-4' : 'h-0 overflow-hidden' } duration-300 ease-in-out 2md:h-auto 2md:overflow-unset 2md:mb-0">
	<div class=" bg-white rounded 2md:min-w-80">

		<div class="flex items-center gap-4 p-4 rounded bg-gray-50 text-sm">
			<div class="bg-gray-200 rounded-full min-w-18 w-18 h-18"></div>
			<div class="w-full mt-2">
				<span class="font-bold">بابک فرخوپاک</span>
				<div class="flex items-center justify-between text-xs">
					<span>امتیاز: ۳۲۰</span>
					<a class="btn btn--xs btn--light text-xs" href="javascript:">تبدیل به پول</a>
				</div>
			</div>
		</div>
	
		<nav class="mt-2">
			<ul>
				<NavItem useInDashboard={true} title="داشبورد" href="/dashboard" icon="icon-dashboard" />
				<NavItem useInDashboard={true} title="سفارشات من" href="/dashboard/orders" icon="icon-controler" />
				<NavItem useInDashboard={true} title="پروفایل" href="/dashboard/profile" icon="icon-user" />
				<NavItem useInDashboard={true} title="نظرات من" href="/dashboard/comments" icon="icon-comment" />
				<NavItem useInDashboard={true} title="اعلانات" href="/dashboard/announcements" icon="icon-bell" />
				<hr class="border-gray-100">
				<NavItem useInDashboard={true} title="خروج از حساب" href="/dashboard/logout" icon="icon-exit" />
			</ul>
		</nav>
		
	</div>
</div>

<button class="z-20 btn btn--gray fixed bottom-8 text-sm 2md:hidden" on:click={_=> show = !show}>
	{ show ? 'بستن' : 'مشاهده' } منوی حساب
</button>
