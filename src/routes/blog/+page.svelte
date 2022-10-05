<script>
	import { page } from '$app/stores'
	import { posts } from '$database/posts.js'
	import PostCard from '$components/PostCard.svelte'
	import Pagination from '$components/Pagination.svelte'
	import { getPaginationItems, getPaginationMaxNumberOfPages } from '$utilities/pagination.js'
	$: currentPageNumber = $page.url.searchParams.get('page') ? Number( $page.url.searchParams.get('page') ) : 1
</script>

<svelte:head>
	<title>بلاگ</title>
</svelte:head>

<div class="grid gap-4 grid-cols-2 md:gap-6 md:grid-cols-3 2lg:grid-cols-4">
	{#each getPaginationItems(posts, currentPageNumber, 8) as post (post.id)}
		<PostCard id={post.id} title={post.title} featuredImage={post.featuredImage} />
	{/each}
</div>

<Pagination {currentPageNumber} maxNumberOfPage={getPaginationMaxNumberOfPages(posts, 8)} baseUrl={'/blog'} />
