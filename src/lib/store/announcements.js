import { readable } from "svelte/store"
import { dateSince } from "$utilities/helpers"

export let announcements = readable(
	[
		{
			id: 1,
			title: "پشتیبانی آنلاین ۲۴/۷",
			description: "پشتیبانی آنلاین فارس گیمر به صورت 24 ساعته در خدمت شما عزیزان می باشد.",
			date: dateSince(new Date("Fri Aug 18 2022 18:00:00 GMT-0700 (Pacific Daylight Time)")),
		},
		{
			id: 2,
			title: "٪۲۰ تخفیف",
			description: "به مناسبت عید نوروز, ۲۰٪ تخفیف روی همه محصولات در سبد خرید اعمال خواهد شد.",
			date: dateSince(new Date("Fri Aug 19 2022 19:00:00 GMT-0700 (Pacific Daylight Time)")),
		},
	].reverse()
)
