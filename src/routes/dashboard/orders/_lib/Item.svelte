<script>
	import Modal from "$components/Modal.svelte"
	import TrackContent from "./TrackContent.svelte"

	let showModal = false
</script>

<div class="do__item">
	<div class="do__item-cell-list">
		<!-- code -->
		<div class="do__item-cell do__item-cell__code">
			<div class="font-bold text-sm flex">
				<p class="font-isans-ed">FFA-980317</p>
				<p class="text-gray-400">#</p>
			</div>
		</div>

		<!-- date -->
		<div class="do__item-cell do__item-cell__date">
			<div class="date-box">
				<p class="date-box__day">29</p>
				<p class="date-box__month">اوردیبهشت</p>
			</div>
		</div>

		<!-- price -->
		<div class="do__item-cell do__item-cell__price">
			<div class="grid gap-1">
				<div class="flex items-center gap-1 whitespace-nowrap">
					<p class="font-bold">100,000</p>
					<p class="text-sm">تومان</p>
				</div>
				<p class="text-2xs">(برای ۲ عدد)</p>
			</div>
		</div>

		<!-- status -->
		<div class="do__item-cell do__item-cell__status">
			<span class="font-bold">پرداخت شده</span>
		</div>

		<!-- delivered -->
		<div class="do__item-cell do__item-cell__delivered">
			<button
				class="btn px-8 btn--brand btn--xs btn--outline js-modal__open"
				on:click={() => (showModal = true)}>سفارش انجام نشد!</button
			>

			{#if showModal}
				<Modal bind:visible={showModal} class="whitespace-normal">
					<p class="text-sm">
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. لورم ایپسوم متن ساختگی با
						تولید سادگی نامفهوم از صنعت چاپ. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
						چاپ
					</p>
				</Modal>
			{/if}
		</div>

		<!-- buttons -->
		<div class="do__item-cell do__item-cell__buttons">
			<div class="grid gap-1">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<!-- TOOD btn--xs -->
				<a href="javascript:" class="btn px-8 btn--brand btn--xs btn--outline w-full">نمایش</a>
				<!-- TOOD btn--xs -->
				<button
					class="btn btn--brand btn--outline btn--xs w-full px-8 gap-1"
					data-bs-toggle="collapse"
					data-bs-target="#collapseDoItem1"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					پیگیری <span class="text-2xs">(2 پیام جدید)</span>
				</button>
			</div>
		</div>
	</div>

	<TrackContent />
</div>
