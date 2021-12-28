<script>
	import { isOpen } from '$store/mobile-menu.js'
	import OutClick from 'svelte-outclick'
	import Logo from './Logo.svelte'
	import Search from './Search.svelte'
	import NavItem from './NavItem.svelte'
	import StreamCard from './StreamCard.svelte'
</script>

<OutClick on:outclick={_=> $isOpen = false} exclude={['.js-burger-toggle-btn']}>
	<sidebar class="fixed translate-x-full {$isOpen && '!translate-x-0'} z-50 inset-0 top-16 bg-gray-900 bg-opacity-60 lg:top-20" id="sidebar">
		<div id="sidebar__content">
			<Logo />

			<div id="sidebar__scrollable-content" class="overflow-y-auto max-h-full px-4 pb-6">
				<Search />
				
				<nav class="py-4">
					<ul>
						<NavItem title="خانه" link="/" icon="fi-rr-home" />
						<NavItem title="فروشگاه" link="/shop" icon="fi-rr-shop" />
						<NavItem title="سوالات متداول" link="/faq" icon="fi-rr-interrogation" />
						<NavItem title="قوانین" link="/terms" icon="fi-rr-bank" />
						<NavItem title="ارتباط با ما" link="/contact" icon="fi-rr-headset" />
						<NavItem title="چرا فارس گیمر" link="/why-farsgamer" icon="fi-rr-diploma" />
						<NavItem title="مقالات" link="/posts" icon="fi-rr-document" />
					</ul>
				</nav>

				<hr class="border-gray-200 mb-4">

				<!-- Streams ... -->
				<div>
					<a class="mb-2 block font-semibold link" href="/streams">استریم ها</a>
					<ul class="grid gap-2">
						<StreamCard />
						<StreamCard />
						<StreamCard />
						<StreamCard />
						<StreamCard />
					</ul>
				</div>
				<!-- ... Streams -->

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
</style>
