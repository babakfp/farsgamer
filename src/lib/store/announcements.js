import { readable } from 'svelte/store'

function dateSince(date) {
  let seconds = Math.floor((new Date() - date) / 1000)

	let interval = seconds / 31536000
  if (interval > 1) {
    return `${Math.floor(interval)} سال پیش`
  }

	interval = seconds / 2592000
  if (interval > 1) {
    return `${Math.floor(interval)} ماه پیش`
  }

	interval = seconds / 86400
  if (interval > 1) {
    return `${Math.floor(interval)} روز پیش`
  }

	interval = seconds / 3600
  if (interval > 1) {
    return `${Math.floor(interval)} ساعت پیش`
  }

	interval = seconds / 60
  if (interval > 1) {
    return `${Math.floor(interval)} دقیقه پیش`
  }

	return `${Math.floor(seconds)} ثانیه پیش`
}

export let announcements = readable([
	{
		id: 2,
		title: '٪۲۰ تخفیف',
		description: 'به مناسبت عید نوروز, ۲۰٪ تخفیف روی همه محصولات در سبد خرید اعمال خواهد شد.',
		date: dateSince(new Date('Fri Aug 18 2022 18:00:00 GMT-0700 (Pacific Daylight Time)')),
	},
	{
		id: 1,
		title: 'پشتیبانی آنلاین ۲۴/۷',
		description: 'پشتیبانی آنلاین فارس گیمر به صورت 24 ساعته در خدمت شما عزیزان می باشد.',
		date: dateSince(new Date('Fri Aug 19 2022 19:00:00 GMT-0700 (Pacific Daylight Time)')),
	},
])
