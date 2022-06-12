<script>
	import posts from '$db/posts.js'
	import PostCard from '$lib/PostCard.svelte'
	import Pagination from '$lib/Pagination.svelte'
</script>

<svelte:head>
	<title>بلاگ</title>
</svelte:head>

<div class="grid gap-4 grid-cols-2 sm:gap-6 sm:grid-cols-3 2md:grid-cols-4 lg:grid-cols-3 2lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6">
	{#each posts as post (post.id)}
		<PostCard id={post.id} title={post.title} featuredImage={post.featuredImage} />
	{/each}
</div>

<Pagination />
