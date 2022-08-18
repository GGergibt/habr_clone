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
			{post&& <Blog post={post}/>}
			{post && <Likes post={post}/>}
			{post && <Author postId={post.id}/>}

		</>
	)
}
export default BlogPage
