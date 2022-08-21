import { readable } from 'svelte/store'

export const giftCards = readable([
	{ src: '/img/gift-card/play-station.png', href: 'javascript:' },
	{ src: '/img/gift-card/apple.png', 				href: 'javascript:' },
	{ src: '/img/gift-card/steam.png', 				href: 'javascript:' },
	{ src: '/img/gift-card/amazon.png', 			href: 'javascript:' },
	{ src: '/img/gift-card/xbox.png', 				href: 'javascript:' },
	{ src: '/img/gift-card/google-play.png', 	href: 'javascript:' },
])

export const mainPosters = readable([
	{ src: '/img/home/home-main-poster (1).png', href: 'javascript:' },
	{ src: '/img/home/home-main-poster (2).png', href: 'javascript:' },
	{ src: '/img/home/home-main-poster (3).png', href: 'javascript:' },
	{ src: '/img/home/home-main-poster (4).png', href: 'javascript:' },
])

export const mainSecondPosters = readable([
	{ src: '/img/home/home-second-poster (1).png', href: 'javascript:' },
	{ src: '/img/home/home-second-poster (2).png', href: 'javascript:' },
])
