<script>
	import { isOpen, close } from '$store/mobile-menu.js'
	import OutClick from 'svelte-outclick'
	import Logo from './Logo.svelte'
	import NavItem from './NavItem.svelte'
	import StreamCard from './StreamCard.svelte'
</script>

<OutClick on:outclick={close} exclude={['.js-burger-toggle-btn']}>
	<sidebar on:click|self={close} class="fixed translate-x-full {$isOpen && '!translate-x-0'} z-50 inset-0 top-16 bg-gray-900 bg-opacity-60 lg:top-20 lg:translate-x-0" id="sidebar">
		<div class="translate-x-full {$isOpen && '!translate-x-0'} duration-300 ease-in-out lg:translate-x-0" id="sidebar__content">
			<Logo />

			<div id="sidebar__scrollable-content" class="overflow-y-auto max-h-full pb-6">
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

				<hr class="border-gray-100 mb-4">

				<!-- Streams ... -->
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
	#sidebar__content {
		@apply max-w-64 bg-white w-full h-full;
	}

	#sidebar__scrollable-content::-webkit-scrollbar {
		width: 2px;
	}
	#sidebar__scrollable-content::-webkit-scrollbar-track {
		background: rgb(229 231 235);
	}
	#sidebar__scrollable-content::-webkit-scrollbar-thumb {
		background: rgb(156 163 175);
	}

	/* hidden. visible on container hover */	
	/* #sidebar__scrollable-content::-webkit-scrollbar-track,
	#sidebar__scrollable-content::-webkit-scrollbar-thumb {
		background: transparent;
	}
	#sidebar__scrollable-content:hover::-webkit-scrollbar-track {
		background: rgb(229 231 235);
	}
	#sidebar__scrollable-content:hover::-webkit-scrollbar-thumb {
		background: rgb(156 163 175);
	} */
</style>
