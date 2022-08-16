// import {useDeletePostQuery} from '../store/post.api'
import {useDeletePostMutation} from '../store/post.api'
import {useParams} from 'react-router-dom'
import {useEffect} from 'react'

const DeletePostPage = () => {
	const params = useParams().id + ""
	const id = params ? parseInt(params): undefined
	const [deletePost, {isLoading, isError, data: response, error}] = useDeletePostMutation()
	useEffect(
		() => {deletePost(id)}
	, [])
	console.log(response)

	// const {isLoading, isError, data: response, error} = useDeletePostQuery(id)
	console.log(response)
	return (
		<p>delete page</p>
	)




}

export default DeletePostPage
