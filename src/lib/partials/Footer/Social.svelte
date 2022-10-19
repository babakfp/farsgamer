<script>
  const items = [
    { label: 'لینک دیسکورد', icon: 'icon-discord', href: 'javascript:' },
    { label: 'لینک تلگرام', icon: 'icon-telegram', href: 'javascript:' },
    { label: 'لینک اینستاگرام', icon: 'icon-instagram', href: 'javascript:' },
  ]
</script>

<ul class="flex justify-center gap-4">
	{#each items as item}
    <li>
      <a class="btn btn--light btn--outline px-0 | w-12 h-12 rounded-full text-gray-500 !scale-100" href={item.href} target="_blank" rel="noreferrer noopener" aria-label={item.label}>
        <i class="{item.icon} text-xl" />
      </a>
    </li>
  {/each}
</ul>
