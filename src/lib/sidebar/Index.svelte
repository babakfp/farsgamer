<script>
	import { isOpen, close } from '$store/mobile-menu.js'
	import OutClick from 'svelte-outclick'
	import Logo from './Logo.svelte'
	import NavItem from './NavItem.svelte'
	import StreamCard from './StreamCard.svelte'
</script>

<OutClick on:outclick={close} excludeByQuerySelector={['.js-burger-toggle-btn']}>
	<sidebar on:click|self={close} class="fixed translate-x-full {$isOpen && '!translate-x-0'} z-50 inset-0 top-16 bg-gray-900 bg-opacity-60 backdrop-blur-sm lg:top-20 lg:translate-x-0" id="sidebar">
		<div class="translate-x-full {$isOpen && '!translate-x-0'} duration-300 ease-in-out lg:translate-x-0" id="sidebar__content">
			<Logo />

			<div id="sidebar__scrollable-content" class="scrollbar max-h-full pb-6 lg:border-l lg:border-gray-100">
				
				<nav class="mt-4">
					<ul>
						<NavItem title="خانه" href="/" icon="fi-rr-home" />
						<NavItem title="فروشگاه" href="/shop" icon="fi-rr-shop" />
						<NavItem title="بلاگ" href="/blog" icon="fi-rr-document" />
						<NavItem title="چرا فارسگیمر" href="/why-us" icon="fi-rr-diploma" />
						<NavItem title="سوالات متداول" href="/faq" icon="fi-rr-interrogation" />
						<NavItem title="تماس با ما" href="/contact" icon="fi-rr-headset" />
						<NavItem title="قوانین و مقررات" href="/terms" icon="fi-rr-bank" />
					</ul>
				</nav>

				<hr class="border-gray-100 my-4">

				<div class="p-4">
					<span class="block mb-4 font-bold">استریم ها</span>
					<ul class="grid gap-2">
						<StreamCard />
						<StreamCard />
						<StreamCard />
						<StreamCard />
						<StreamCard />
					</ul>
				</div>

			</div>
		</div>
	</sidebar>
</OutClick>

<style lang="postcss">
	#sidebar {
		height: calc(100vh - 4rem);
	}
	@media only screen and (min-width: 1024px) {
		#sidebar {
			height: calc(100vh - 5rem);
		}
	}
	#sidebar__content {
		@apply max-w-64 bg-white w-full h-full;
	}
</style>
