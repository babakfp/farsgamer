import { readable } from "svelte/store"

export const giftCards = readable([
	{ alt: "گیفت‌کارد PlayStation", src: "/img/gift-card/play-station.png", href: "javascript:" },
	{ alt: "گیفت‌کارد Apple", src: "/img/gift-card/apple.png", href: "javascript:" },
	{ alt: "گیفت‌کارد Steam", src: "/img/gift-card/steam.png", href: "javascript:" },
	{ alt: "گیفت‌کارد Amazon", src: "/img/gift-card/amazon.png", href: "javascript:" },
	{ alt: "گیفت‌کارد Xbox", src: "/img/gift-card/xbox.png", href: "javascript:" },
	{ alt: "گیفت‌کارد Google Play", src: "/img/gift-card/google-play.png", href: "javascript:" },
])

export const bigPosterImages = readable([
	{
		alt: "Genshin Impact - Summer Fantasia",
		src: "/img/home/posters/big (1).jpg",
		href: "javascript:",
	},
	{ alt: "Aragami 2", src: "/img/home/posters/big (2).jpg", href: "javascript:" },
	{ alt: "Wolfenstein - The New Order", src: "/img/home/posters/big (3).jpg", href: "javascript:" },
])

export const smallPosterImages = readable([
	{
		alt: "Fortnite Zero Build - NO BUILD BATTLE ROYALE",
		src: "/img/home/posters/small (1).jpg",
		href: "javascript:",
	},
	{
		alt: "Fall Guys Season 1 - FREE FOR ALL",
		src: "/img/home/posters/small (2).jpg",
		href: "javascript:",
	},
])
