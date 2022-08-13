import posts from '$database/posts.js'

export async function GET({ params }) {
	const post = posts.find(item => item.id === Number(params.id))

	if (post) {
    return {
      body: { post }
    }
  }

  return { status: 404 }
}
