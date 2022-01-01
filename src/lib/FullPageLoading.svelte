<script>
	let show = true
	let delay = 250
</script>

<svelte:window on:load={_=> setTimeout(_=> (show = false), delay)}>

{#if show}
	<div id="page-preloader">
		<span class="circle"></span>
	</div>
{/if}

<style>
	:root {
		--pix-main-color: #713afc;
		--pix-main-color-darker: #5922E4;
		--pix-main-color-lighter: #7D46FF;
		--pix-main-color-lighter-2x: #8952FF;

		/*
		--pix-main-color: #216fff;
		--pix-main-color-lighter: #2D7BFF;
		--pix-main-color-lighter-2x: #3987FF;
		--pix-main-color-darker: #0957E7;
		*/
	}

	#page-preloader {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: #141315;
		z-index: 100500;
	}

	#page-preloader .circle {
		animation: bottom-ripple 1.5s ease-in-out infinite -70ms;
		background-color: var(--pix-main-color-darker);
		border-radius: 50%;
		box-shadow: 0 0.5em 0.5em rgb(0 0 0 / 40%);
		width: 4em;
		height: 4em;
		position: absolute;
		top: calc(50% - 2em);
		left: calc(50% - 2em);
	}

	#page-preloader .circle::before,
	#page-preloader .circle::after {
		border-radius: inherit;
		box-shadow: 0 0.5em 0.5em rgb(0 0 0 / 40%);
		content: "";
		left: 50%;
		position: absolute;
		top: 50%;
	}

	#page-preloader .circle::before {
		animation: top-ripple 1.5s ease-in-out infinite -35ms;
		background-color: var(--pix-main-color);
		height: 2.7em;
		margin: -1.35em 0 0 -1.35em;
		width: 2.7em;
	}

	#page-preloader .circle::after {
		animation: top-ripple 1.5s ease-in-out infinite;
		background-color: var(--pix-main-color-lighter);
		height: 1.5em;
		margin: -.75em 0 0 -.75em;
		width: 1.5em;
	}

	@keyframes bottom-ripple {
		0% {
			box-shadow: 0 .5em .5em rgba(0, 0, 0, .4);
			transform: scale(1)
		}
		50% {
			box-shadow: 0 1.5em 1.5em rgba(0, 0, 0, .4);
			transform: scale(1.1)
		}
	}

	@keyframes top-ripple {
		0% {
			box-shadow: 0 .5em .5em rgba(0, 0, 0, .4);
			transform: scale(1)
		}
		50% {
			box-shadow: 0 1.5em 1.5em rgba(0, 0, 0, .4);
			transform: scale(1.1)
		}
	}
</style>
