<script>
	import { page } from '$app/stores'
	import { navigating } from "$app/stores"
	import OutClick from 'svelte-outclick'
	import { isOpen, close, dashboardClose } from '$store/mobile-menu.js'
	import streams from '$store/streams.js'
	import Logo from './Logo.svelte'
	import NavItem from './NavItem.svelte'
	import StreamCard from './StreamCard.svelte'

	$: {
		$navigating && close()
	}

	const onOutClick =_=> {
		$page.url.pathname.includes('/dashboard') ? dashboardClose() : close()
	}
</script>

<!-- UnderLay -->
<div id="sidemenu__underlay" class="z-30 fixed inset-0 top-header bg-gray-900 bg-opacity-25 backdrop-blur-xs duration-300 ease-in-out opacity-0 invisible pointer-events-none {$isOpen && '!opacity-100 !visible !pointer-events-auto'}" />

<OutClick on:outclick={onOutClick} excludeByQuerySelector={['.js-burger-toggle-btn']}>
	<sidebar class="z-30 fixed inset-0 top-header w-64 bg-white translate-x-full duration-300 ease-in-out {$isOpen && '!translate-x-0'}">
		<Logo />

		<div class="scrollbar max-h-full pb-6 border-l border-gray-100">
			
			<nav class="pt-4">
				<ul>
					<NavItem title="خانه" href="/" icon="fg-home" />
					<NavItem title="فروشگاه" href="/shop" icon="fg-shop" />
					<NavItem title="بلاگ" href="/blog" icon="fg-document" />
					<NavItem title="چرا فارس گیمر" href="/why-us" icon="fg-diploma" />
					<NavItem title="سوالات متداول" href="/faq" icon="fg-interrogation" />
					<NavItem title="تماس با ما" href="/contact" icon="fg-headset" />
					<NavItem title="قوانین و مقررات" href="/terms" icon="fg-bank" />
				</ul>
			</nav>

			<hr class="border-gray-100 my-4">

			<div class="p-4 space-y-2">
				<div class="flex items-center gap-2 py-3 px-4 bg-gray-50 rounded">
					<i class="fg-shopping-cart-check w-10 h-10 border-2 border-white rounded-full drop-shadow-lg"></i>
					<div>
						<h6 class="font-bold text-yellow animate-pulse">۴۰۰</h6>
						<p class="text-xs">سفارش <span class="font-medium">موفق</span> امروز</p>
					</div>
				</div>
				<div class="flex items-center gap-2 py-3 px-4 bg-gray-50 rounded">
					<i class="fg-truck-loading w-10 h-10 border-2 border-white rounded-full drop-shadow-lg"></i>
					<div>
						<h6 class="font-bold text-yellow animate-pulse">۴۰</h6>
						<p class="text-xs">سفارش <span class="font-medium">در حال انجام</span></p>
					</div>
				</div>
			</div>

			<hr class="border-gray-100 my-4">

			<div class="p-4">
				<span class="block mb-4 font-bold">استریم ها</span>
				<ul class="grid gap-2">
					{#each $streams as stream}
						<StreamCard {...stream} />
					{/each}
				</ul>
			</div>

		</div>
	</sidebar>
</OutClick>

<style lang="postcss">
	:global(body.main-header) #sidemenu__underlay {
		@apply lg:hidden;
	}
	:global(body.main-header) sidebar {
		@apply lg:w-56 lg:z-0 lg:translate-x-0 lg:transition-none 2xl:w-64;
	}
</style>
