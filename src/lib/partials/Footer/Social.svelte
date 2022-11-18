<script>
  const items = [
    { label: 'لینک دیسکورد', icon: 'icon-discord' },
    { label: 'لینک تلگرام', icon: 'icon-telegram' },
    { label: 'لینک اینستاگرام', icon: 'icon-instagram' },
  ]
</script>

<ul class="flex justify-center gap-4">
	{#each items as item}
    <li>
      <a class="btn btn--light btn--outline px-0 | w-12 h-12 rounded-full text-gray-500 active:scale-y-95" href="javascript:" target="_blank" rel="noreferrer noopener" aria-label={item.label}>
        <i class="{item.icon} text-xl" />
      </a>
    </li>
  {/each}
</ul>
