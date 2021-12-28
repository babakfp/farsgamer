import { readable } from 'svelte/store'

export let publicAnnouncements = readable([
	{
		title: 'پشتیبانی آنلاین ۲۴/۷',
		description: 'پشتیبانی آنلاین فارسگیمر به صورت 24 ساعته در خدمت شما عزیزان می باشد.',
	}
])

export let userAnnouncements = readable([])
