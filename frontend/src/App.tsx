import React from 'react';

import { Routes, Route, Link } from 'react-router-dom'

import HomePage from './pages/homePage'

import BlogPage from './pages/blogPage'

import Layout from './components/layout';

import SignUpPage from './pages/signUpPage'

import LoginPage from './pages/loginPage'

function App() {
  return (

	  <>
	  <Routes>

		  <Route path="/" element={<Layout/>}>
		  <Route index element={<HomePage/>}/>
		  <Route path="/blog/:id" element={<BlogPage />}/>
		  <Route path="/signup" element={<SignUpPage/>}/>
		  <Route path="/login" element={<LoginPage/>}/>
		  </Route>
	  </Routes>
	  </>
  );
}

export default App
