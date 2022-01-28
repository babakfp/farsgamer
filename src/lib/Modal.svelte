<script>
	import OutClick from 'svelte-outclick'
	export let visible = true
</script>

{#if visible}
	<OutClick on:outclick={_=> visible = false} excludeByQuerySelector={['js-modal__open']}>

		<div class="z-20 fixed inset-0 flex items-center justify-center backdrop-blur-xs">
			<div class="modal__content w-full max-w-md p-6 bg-white rounded drop-shadow-2xl">
				
				<slot />

				<div class="modal__footer mt-4 -mx-2 -mb-2 text-left">
					<button	class="btn btn--brand text-sm" on:click={_=> visible = false}>متوجه شدم</button>
				</div>
			
			</div>
		</div>

	</OutClick>
{/if}
