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
</script>

<OutClick on:outclick={_=> $page.url.pathname.includes('/dashboard') ? dashboardClose() : close()} excludeByQuerySelector={['.js-burger-toggle-btn']}>
	<sidebar on:click|self={_=> $page.url.pathname.includes('/dashboard') ? dashboardClose() : close()} id="sidemenu" class="z-30 [ fixed inset-0 top-header ] [ opacity-0 pointer-events-none ] {$isOpen && '[ opacity-100 pointer-events-auto ]'} [ bg-gray-900 bg-opacity-25 backdrop-blur-xs ] [ duration-300 ]">
		<div id="sidemenu__wrapper" class="[ w-full max-w-64 h-full ] bg-white translate-x-full {$isOpen && '!translate-x-0'} [ duration-300 ease-in-out ]">
			<Logo />

			<div id="sidemenu__scrollable-content" class="scrollbar max-h-full pb-6">
				
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

				<div class="p-4">
					<span class="block mb-4 font-bold">استریم ها</span>
					<ul class="grid gap-2">
						{#each $streams as stream}
							<StreamCard {...stream} />
						{/each}
					</ul>
				</div>

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

			</div>
		</div>
	</sidebar>
</OutClick>

<style lang="postcss">
	:global(body.main-header) #sidemenu {
		@apply lg:w-56 lg:ml-auto lg:translate-x-0 lg:bg-transparent lg:opacity-100 lg:pointer-events-auto 2xl:w-64;
	}

	:global(body.main-header) #sidemenu__wrapper {
		@apply lg:translate-x-0;
	}
	
	:global(body.main-header) #sidemenu__scrollable-content {
		@apply lg:border-l lg:border-gray-100;
	}
</style>
