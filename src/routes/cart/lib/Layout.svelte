<div class="grid gap-4 xl:grid-cols-12 xl:items-start xl:gap-8">

	<div class="xl:col-start-1 xl:col-end-9 2xl:col-end-10 xl:row-span-full overflow-hidden">
		<slot name="before-main" />
		<slot name="main" />
	</div>

	<div class="grid gap-4 xl:col-start-9 xl:col-end-13 2xl:col-start-10 xl:row-span-full">
		<slot name="get-a-gift" />
		<div class="grid gap-8 p-4 bg-white rounded">
			<slot name="sidebar" />
		</div>
	</div>

</div>
