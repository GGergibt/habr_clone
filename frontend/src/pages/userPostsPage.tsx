import {useLazyUserPostsQuery} from '../store/post.api'
import {useAuth} from '../hooks/useAuth'
import {useEffect} from 'react'

import PostList from '../components/postList'

const UserPostsPage = () => {
  const user = useAuth()
  const [getPosts, {isLoading, isError, data: posts}] = useLazyUserPostsQuery()
  useEffect(() => {
	  user.token && getPosts(user.token)
  }, [user.token])
  return (
    <div className="flex justify-center">

	    { posts&& <PostList posts={posts}/>}
    </div>
  )

}

export default UserPostsPage
