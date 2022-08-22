import { readable } from 'svelte/store'

export const giftCards = readable([
	{ src: '/img/gift-card/play-station.png', href: 'javascript:' },
	{ src: '/img/gift-card/apple.png', 				href: 'javascript:' },
	{ src: '/img/gift-card/steam.png', 				href: 'javascript:' },
	{ src: '/img/gift-card/amazon.png', 			href: 'javascript:' },
	{ src: '/img/gift-card/xbox.png', 				href: 'javascript:' },
	{ src: '/img/gift-card/google-play.png', 	href: 'javascript:' },
])

export const bigPosterImages = readable([
	{ src: '/img/home/posters/big (1).jpg', href: 'javascript:' },
	{ src: '/img/home/posters/big (2).jpg', href: 'javascript:' },
	{ src: '/img/home/posters/big (3).jpg', href: 'javascript:' },
])

export const smallPosterImages = readable([
	{ src: '/img/home/posters/small (1).jpg', href: 'javascript:' },
	{ src: '/img/home/posters/small (2).jpg', href: 'javascript:' },
])
