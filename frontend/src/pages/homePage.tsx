import {useAllPostsQuery} from '../store/backend.api'

import PostList from '../components/postList'

const HomePage = () => {
  const {isLoading, isError, data: posts} = useAllPostsQuery('')
  return (
    <div className="flex justify-center">

	    { posts&& <PostList posts={posts}/>}
    </div>
  )

}

export default HomePage
