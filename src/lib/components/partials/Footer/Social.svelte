<script>
  const items = [
    { href: 'javascript:', icon: 'icon-discord' },
    { href: 'javascript:', icon: 'icon-telegram' },
    { href: 'javascript:', icon: 'icon-instagram' },
  ]
</script>

<ul class="flex justify-center gap-4">
	{#each items as {href, icon}}
    <li>
      <a class="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-400 rounded duration-200 border-2 border-transparent hover:rotate-12 hover:text-gray-500 hover:border-gray-200" {href} target="_blank">
        <i class="{icon} text-xl"></i>
      </a>
    </li>
  {/each}
</ul>
