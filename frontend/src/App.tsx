import React from 'react';

import { Routes, Route, Link } from 'react-router-dom'

import HomePage from './pages/homePage'

import BlogPage from './pages/blogPage'

function App() {
  // const {isLoading, isError, data} = useAllPostsQuery('jj')
  // const {isLoading, isError, data: posts} = useAllPostsQuery('')
  // console.log(posts)
  

  return (

  <Routes>
	  <Route path="/">
		  <Route index element={<HomePage/>}/>
		  <Route path="/blog/:id" element={<BlogPage />}/>
	  </Route>
  </Routes>
  );
}

export default App
