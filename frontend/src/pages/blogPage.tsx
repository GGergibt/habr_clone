import {useGetPostQuery} from '../store/backend.api'

import {useParams} from 'react-router-dom'

import Blog from '../components/blog';

const BlogPage = () => {
	const params = useParams().id + ""
	const id = parseInt(params)

	const {isLoading, isError, data: post} = useGetPostQuery(id)
	return (

		<>
			{post&& <Blog post={post}/>}
		</>
	)
}
export default BlogPage
