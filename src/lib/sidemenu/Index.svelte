<script>
	import { page } from '$app/stores'
	import { navigating } from "$app/stores"
	import { isOpen, close, dashboardClose } from '$store/mobile-menu.js'
	import streams from '$store/streams.js'
	import OutClick from 'svelte-outclick'
	import Logo from './Logo.svelte'
	import NavItem from './NavItem.svelte'
	import StreamCard from './StreamCard.svelte'

	$: {
		$navigating && close()
	}
</script>

<OutClick on:outclick={_=> $page.url.pathname.includes('/dashboard') ? dashboardClose() : close()} excludeByQuerySelector={['.js-burger-toggle-btn']}>
	<sidebar on:click|self={_=> $page.url.pathname.includes('/dashboard') ? dashboardClose() : close()} id="sidemenu" class="fixed translate-x-full {$isOpen && '!translate-x-0'} z-50 inset-0 top-16 bg-gray-900 bg-opacity-60 backdrop-blur-sm lg:top-20">
		<div id="sidemenu__wrapper" class="translate-x-full {$isOpen && '!translate-x-0'} duration-300 ease-in-out">
			<Logo />

			<div id="sidemenu__scrollable-content" class="scrollbar max-h-full pb-6">
				
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
						{#each $streams as stream}
							<StreamCard {...stream} />
						{/each}
					</ul>
				</div>

			</div>
		</div>
	</sidebar>
</OutClick>

<style lang="postcss">
	:global(body.main-header) #sidemenu {
		@apply lg:w-56 lg:ml-auto lg:translate-x-0 lg:bg-transparent 2xl:w-64;
	}
	#sidemenu {
		height: calc(100vh - 4rem);
	}
	@media only screen and (min-width: 1024px) {
		#sidemenu {
			height: calc(100vh - 5rem);
		}
	}
	#sidemenu__wrapper {
		@apply max-w-64 bg-white w-full h-full;
	}
	:global(body.main-header) #sidemenu__wrapper {
		@apply lg:translate-x-0;
	}
	
	:global(body.main-header) #sidemenu__scrollable-content {
		@apply lg:border-l lg:border-gray-100;
	}
</style>
