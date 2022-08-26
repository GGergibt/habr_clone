import {useGetPostQuery} from '../store/post.api'

import {useParams} from 'react-router-dom'

import Blog from '../components/blog';
import Likes from '../components/blogLikes';
import Author from '../components/author';

const BlogPage = () => {
	const params = useParams().id + ""
	const id = parseInt(params)

	const {isLoading, isError, data: post} = useGetPostQuery(id)
	return (

		<>
			<div className="container block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

			{post&& <Blog post={post}/>}
			{post && <Likes post={post}/>}
			{post && <Author postId={post.id}/>}
			</div>

		</>
	)
}
export default BlogPage
