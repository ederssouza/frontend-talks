import { useQuery } from '@tanstack/react-query'
import { PostsService } from '@/infra/http/services'
import { Card } from '../Card'

function Home() {
  const {
    data: posts,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['posts'],
    queryFn: PostsService.get
  })

  const hasValivePosts = Array.isArray(posts) && posts?.length

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <div>
      <h1>Posts</h1>

      {!hasValivePosts ? (
        <div>No posts here...</div>
      ) : (
        posts?.map(({ id, title, body }) => (
          <Card key={id} title={title} description={body} />
        ))
      )}
    </div>
  )
}

export default Home
