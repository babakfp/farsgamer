<script>
	import { navigating, page } from "$app/stores"
	import OutClick from "svelte-outclick"
	import { isOpen } from "$store/mobile-menu.js"
	import streams from "$store/streams.js"
	import Logo from "./Logo.svelte"
	import NavItem from "./NavItem.svelte"
	import StreamCard from "./StreamCard.svelte"

	$: $navigating && ($isOpen = false)

	const menuItems = [
		{ title: "خانه", href: "/", icon: "icon-home" },
		{ title: "فروشگاه", href: "/shop", icon: "icon-shop" },
		{ title: "بلاگ", href: "/blog", icon: "icon-document" },
		{ title: "چرا فارس گیمر", href: "/why-us", icon: "icon-diploma" },
		{ title: "سوالات متداول", href: "/faq", icon: "icon-interrogation" },
		{ title: "تماس با ما", href: "/contact", icon: "icon-headset" },
		{ title: "قوانین و مقررات", href: "/terms", icon: "icon-bank" },
	]
</script>

<!-- UnderLay -->
<div
	id="sidemenu__underlay"
	class="z-30 fixed inset-0 top-header bg-gray-400/50 duration-300 ease-in-out hide {$isOpen &&
		'show'}"
/>

<OutClick on:outclick={() => ($isOpen = false)} excludeByQuerySelector={[".js-burger-toggle-btn"]}>
	<sidebar
		class="z-30 fixed inset-0 top-header w-64 bg-white translate-x-full duration-300 ease-in-out hide {$isOpen &&
			'!translate-x-0 show'}"
	>
		<Logo />

		<div class="scrollbar max-h-full pb-12 border-l border-gray-100">
			<nav class="pt-4">
				<ul>
					{#each menuItems as item}
						<NavItem {...item} />
					{/each}
				</ul>
			</nav>

			<hr class="border-gray-100 my-4" />

			<div class="p-4 space-y-2">
				<div class="flex items-center gap-2 py-3 px-4 bg-gray-50 rounded">
					<i
						class="icon-shopping-cart-check w-10 h-10 border-2 border-white rounded-full drop-shadow-lg"
					/>
					<div>
						<h6 class="font-bold text-yellow animate-pulse">۴۰۰</h6>
						<p class="text-xs">سفارش <span class="font-medium">موفق</span> امروز</p>
					</div>
				</div>
				<div class="flex items-center gap-2 py-3 px-4 bg-gray-50 rounded">
					<i
						class="icon-truck-loading w-10 h-10 border-2 border-white rounded-full drop-shadow-lg"
					/>
					<div>
						<h6 class="font-bold text-yellow animate-pulse">۴۰</h6>
						<p class="text-xs">سفارش <span class="font-medium">در حال انجام</span></p>
					</div>
				</div>
			</div>

			<hr class="border-gray-100 my-4" />

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
	:global(body.main-header) {
		#sidemenu__underlay {
			@apply lg:hidden;
		}
		sidebar {
			@apply lg:show lg:w-56 lg:z-0 lg:translate-x-0 lg:transition-none lg:border-t-0 2xl:w-64;
		}
	}
</style>
