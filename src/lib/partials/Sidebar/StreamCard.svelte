<script>
	export let username
	export let avatar
	export let game
	export let liveStreamLink
</script>

<li>
  <a class="group flex items-center justify-between gap-2 py-3 px-4 bg-gray-50 border border-gray-100 rounded duration-200 ease-in-out outline-card" href={liveStreamLink} target="_blank" rel="noreferrer">
    <div class="flex items-center gap-2">
      <img class="w-10 border-2 border-white rounded-full drop-shadow-lg duration-200 ease-in-out" src={avatar} alt loading="lazy">
      <div>
        <h6 class="font-bold text-sm">{username}</h6>
        <p class="text-xs">{game}</p>
      </div>
    </div>
		<div class="bg-red-400 animate-pulse w-2 h-2 rounded-full"></div>
  </a>
</li>
