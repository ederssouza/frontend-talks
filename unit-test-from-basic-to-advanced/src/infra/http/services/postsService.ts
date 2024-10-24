import { axiosInstance } from '../adapters'
import { Post } from './types'

class PostService {
  static async get(): Promise<Post[]> {
    const response = await axiosInstance.get('/posts')

    return response.data
  }

  static async getById(id: string | number): Promise<Post> {
    const response = await axiosInstance.get(`/posts/${id}`)

    return response.data
  }
}

export default PostService
