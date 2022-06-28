<script>
	import { navigating } from "$app/stores"
	import NavItem from './NavItem.svelte'

	let show = false
	$: $navigating && (show = false)

  const menuItems = [
    { title: 'داشبورد', href: '/dashboard', icon: 'icon-cube' },
    { title: 'سفارشات من', href: '/dashboard/orders', icon: 'icon-gamepad' },
    { title: 'نظرات من', href: '/dashboard/comments', icon: 'icon-comment' },
    { title: 'اعلانات', href: '/dashboard/announcements', icon: 'icon-bell' },
    { title: 'تنظیمات حساب', href: '/dashboard/settings', icon: 'icon-settings' },
    { title: 'خروج از حساب', href: '/dashboard/logout', icon: 'icon-power' },
  ]
</script>

<div class="mb-4 bg-white rounded 2md:mb-0 2md:min-w-80">

  <div class="flex items-center gap-4 p-4 rounded bg-gray-50 text-sm">
    <div class="bg-gray-200 rounded-full min-w-18 w-18 h-18">
      <img class="w-full h-full" src="/img/avatar.png" alt="عکس پروفایل شما">
    </div>
    <div class="w-full mt-2">
      <span class="font-bold">بابک فرخوپاک</span>
      <div class="flex items-center justify-between text-xs">
        <span>امتیاز: ۳۲۰</span>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a class="btn btn--gray btn--outline btn--xs text-xs" href="javascript:">تبدیل به پول</a>
      </div>
    </div>
  </div>

  <nav>
    <div class="h-0 overflow-hidden duration-300 ease-in-out {show && 'h-auto'} 2md:h-auto">
      <ul>
        {#each menuItems as item, i}
          <NavItem {...item} />
          {#if i + 1 === menuItems.length}
            <hr class="hidden 2md:block 2md:border-gray-100">
          {/if}
        {/each}
      </ul>
    </div>

    <button class="flex items-center gap-3 w-full py-3 pb-4 pl-6 pr-5 {show && 'border-t border-gray-100'} hover:text-brand 2md:hidden" on:click={_=> show = !show}>
      <i class="icon-caret-down w-8 h-8 flex items-center justify-center text-lg opacity-75 duration-300 ease-in-out rotate-0 {show && '!rotate-180'}"></i>
      <span class="font-medium">{show ? 'بـسـتـن' : 'مـشـاهـده'} مـنـو</span>
    </button>
  </nav>
  
</div>

<style lang="postcss">
  nav ul :global(li:first-of-type a) {
    @apply pt-5;
  }

  nav ul :global(li:last-of-type a) {
    @apply pb-5;
  }
</style>
