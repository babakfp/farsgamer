import { posts } from '$database/posts.js'

export async function load({ params }) {
	const post = posts.find(item => item.id === Number(params.id))

	if (post) {
    return { post }
  }

  throw error (404, 'Not found')
}
