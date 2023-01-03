import { createPostComments } from "./helpers.js"

const post = {
	id: 1,
	title: "Discover Open World Fishing in Call of the Wild: The Angler, Out Now",
	featuredImage: "/img/posts/(1).jpg",
	releaseDate: "1401/01/01",
	modifyDate: "1401/02/07",
	comments: createPostComments(),
}

export const posts = [
	post,
	{
		...post,
		id: 2,
		title: "Albert Wesker Comes to Dead by Daylight: How To Survive",
		featuredImage: "/img/posts/(2).jpg",
	},
	{
		...post,
		id: 3,
		title: "New Tales from the Borderlands coming October 21, 2022!",
		featuredImage: "/img/posts/(3).jpg",
	},
	{
		...post,
		id: 4,
		title: "Tortuga – A Pirate’s Tale sets sail as an exclusive in Q1 2023",
		featuredImage: "/img/posts/(4).jpg",
	},
	{
		...post,
		id: 5,
		title: "Smarmy James Bond meets Darks Souls PVP in social stealth game DECEIVE INC.",
		featuredImage: "/img/posts/(5).jpg",
	},
	{
		...post,
		id: 6,
		title: "Genshin Impact Version 3.0: Heading Westward to Sumeru",
		featuredImage: "/img/posts/(6).jpg",
	},
	{
		...post,
		id: 7,
		title: "Goat Simulator 3 releases first gameplay trailer",
		featuredImage: "/img/posts/(7).jpg",
	},
	{
		...post,
		id: 8,
		title: "Dead Island 2 hits February 3",
		featuredImage: "/img/posts/(8).jpg",
	},
	{
		...post,
		id: 9,
		title: "Be your own boss. Saints Row is out now on the Epic Games Store.",
		featuredImage: "/img/posts/(9).jpg",
	},
	{
		...post,
		id: 10,
		title: "The Epic Games Store August Event Sale",
		featuredImage: "/img/posts/(10).jpg",
	},
].reverse()
