import posts from '$db/posts.js'

export async function get({ params }) {
	const post = posts.find(item => item.id === Number(params.id))

	if (post) {
    return {
      body: { post }
    }
  }

  return { status: 404 }
}
