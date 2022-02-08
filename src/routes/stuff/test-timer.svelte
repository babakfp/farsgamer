<script>
	const countDownDate = new Date('Jan 5, 2022 15:37:0').getTime()
	// Today's date and time
	let now = new Date().getTime()

	// Find the distance between now and the count down date
	$: distance = countDownDate - now

	// Time calculations for days, hours, minutes and seconds
	$: days = Math.floor(distance / (1000 * 60 * 60 * 24))
	$: hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	$: minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
	$: seconds = Math.floor((distance % (1000 * 60)) / 1000)

	setInterval(_=> {
		if ( distance > 0 ) {
			distance -= 1000
		}
	}, 1000)
</script>

{#if distance < 0}
	<div class="dir-ltr">0d 0h 0m 0s</div>
	<span>Expired</span>
{:else}
	<div class="dir-ltr">{days}d {hours}h {minutes}m {seconds}s</div>
{/if}
