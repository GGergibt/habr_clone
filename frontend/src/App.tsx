import React from 'react';

import {useAllPostsQuery} from './store/backend.api'

import PostList from './components/postList'

function App() {
  // const {isLoading, isError, data} = useAllPostsQuery('jj')
  const {isLoading, isError, data: posts} = useAllPostsQuery('')
  console.log(posts)
  

  return (

    <div className="flex justify-center">

	    { posts&& <PostList posts={posts}/>}
    </div>
  );
}

export default App
