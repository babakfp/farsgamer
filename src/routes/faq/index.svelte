<script>
	import Accordion from '$lib/Accordion.svelte'
	import AccordionGroup from '$lib/AccordionGroup.svelte'
</script>

<svelte:head>
	<title>سوالات متداول</title>
</svelte:head>

<div class="content">

	<h1 class="text-2xl font-bold">سوالات متداول</h1>

	<div class="py-4"><hr></div>

	<ol class="relative grid gap-12">
		{#each [...Array(3).keys()] as _}
			<AccordionGroup title="پیگیری سفارشات">
	
				{#each [...Array(3).keys()] as _}
					<Accordion title="جوابگوی سوالات پیوسته اهل دنیای موجود">
						<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
					</Accordion>
				{/each}
	
			</AccordionGroup>
		{/each}
	</ol>

</div>

<style lang="postcss">
	.content {
		@apply max-w-3xl mt-4 mx-auto space-y-4 pb-8;
	}
	.content p {
		@apply leading-7;
	}
	.content h3 {
		@apply text-xl font-bold;
	}
	.content h3 + p {
		@apply !mt-2;
	}
	.content p + h3 {
		@apply !mt-8;
	}
</style>
