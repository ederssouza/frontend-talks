import { useQuery } from '@tanstack/react-query'
import { PostsService } from '@/infra/http/services'

function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['todos'],
    queryFn: PostsService.get
  })

  console.log({
    data,
    isLoading,
    isError
  })

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
