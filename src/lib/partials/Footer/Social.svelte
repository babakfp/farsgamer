<script>
  const items = [
    { icon: 'icon-discord', href: 'javascript:' },
    { icon: 'icon-telegram', href: 'javascript:' },
    { icon: 'icon-instagram', href: 'javascript:' },
  ]
</script>

<ul class="flex justify-center gap-4">
	{#each items as {href, icon}}
    <li>
      <a class="btn btn--light btn--outline px-0 | w-12 h-12 rounded-full text-gray-500 !scale-100" {href} target="_blank" rel="noreferrer">
        <i class="{icon} text-xl" />
      </a>
    </li>
  {/each}
</ul>
