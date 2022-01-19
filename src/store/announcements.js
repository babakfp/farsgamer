import { readable } from 'svelte/store'

export let announcements = readable([
	{
		title: '۲۰٪ تخفیف',
		description: 'به مناسبت عید نوروز, ۲۰٪ تخفیف روی همه محصولات در سبد خرید اعمال خواهد شد.',
	},
	{
		title: 'پشتیبانی آنلاین ۲۴/۷',
		description: 'پشتیبانی آنلاین فارسگیمر به صورت 24 ساعته در خدمت شما عزیزان می باشد.',
	}
])
