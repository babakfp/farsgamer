<script>
	import { navigating } from "$app/stores"
	import { NavItem } from '$partials/SideMenu'

	let show = false
	$: $navigating && (show = false)
</script>

<div class="{show ? 'h-auto mb-4' : 'h-0 overflow-hidden' } duration-300 ease-in-out 2md:h-auto 2md:overflow-unset 2md:mb-0">
	<div class=" bg-white rounded 2md:min-w-80">

		<div class="flex items-center gap-4 p-4 rounded bg-gray-50 text-sm">
			<div class="bg-gray-200 rounded-full min-w-18 w-18 h-18"></div>
			<div class="w-full mt-2">
				<span class="font-bold">بابک فرخوپاک</span>
				<div class="flex items-center justify-between text-xs">
					<span>امتیاز: ۳۲۰</span>
					<a class="btn btn--gray btn--outline btn--xs text-xs" href="javascript:">تبدیل به پول</a>
				</div>
			</div>
		</div>
	
		<nav class="mt-2">
			<ul>
				<NavItem useInDashboard={true} title="داشبورد" href="/dashboard" icon="fg-cube" />
				<NavItem useInDashboard={true} title="سفارشات من" href="/dashboard/orders" icon="fg-gamepad" />
				<NavItem useInDashboard={true} title="نظرات من" href="/dashboard/comments" icon="fg-comment" />
				<NavItem useInDashboard={true} title="اعلانات" href="/dashboard/announcements" icon="fg-bell" />
				<NavItem useInDashboard={true} title="تنظیمات حساب" href="/dashboard/settings" icon="fg-settings" />
				<hr class="border-gray-100">
				<NavItem useInDashboard={true} title="خروج از حساب" href="/dashboard/logout" icon="fg-power" />
			</ul>
		</nav>
		
	</div>
</div>

<!-- TODO: Only add `href="#body"` if menu was closed -->
<a class="btn btn--gray z-20 fixed bottom-4 right-4 text-sm sm:bottom-6 sm:right-6 2md:hidden" href="#body" on:click={_=> show = !show}>
	{ show ? 'بستن' : 'مشاهده' } منوی حساب
</a>
