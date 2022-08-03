import React from 'react';

import { Routes, Route, Link } from 'react-router-dom'

import HomePage from './pages/homePage'

function App() {
  // const {isLoading, isError, data} = useAllPostsQuery('jj')
  // const {isLoading, isError, data: posts} = useAllPostsQuery('')
  // console.log(posts)
  

  return (

  <Routes>
	  <Route path="/">
		  <Route index element={<HomePage/>}/>
	  </Route>
  </Routes>
  );
}

export default App
