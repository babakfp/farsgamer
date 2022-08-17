<script>
	import OutClick from 'svelte-outclick'
	export let className = ''; export { className as class }
	export let visible = false
</script>

{#if visible}
	<div class="{className} z-20 fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
	
		<OutClick on:outclick={_=> visible = false} excludeByQuerySelector={['js-modal__open']}>
			<div class="w-full max-w-md p-6 bg-white rounded drop-shadow-2xl">
				
				<slot />

				<div class="mt-4 -mx-2 -mb-2 text-left">
					<button	class="btn btn--brand text-sm" on:click={_=> visible = false}>متوجه شدم</button>
				</div>
			
			</div>
		</OutClick>

	</div>
{/if}
