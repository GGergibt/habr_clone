import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
import {useLazyGetPostQuery} from '../store/post.api'

export const useEditPost = (setValue: Function) => {
	const { id } = useParams()
	const intId = id ? parseInt(id): undefined
	const [getPost, {isLoading, isError, data: post, error}] = useLazyGetPostQuery()
	useEffect(() => {
		if (intId) {
		getPost(intId)
		// intIdf  && getPost(intId)

		}

	}, [intId])

	useEffect(() => {
		if (post) {
			setValue('title', `${post.title}`) 
			setValue('content', `${post.content}`)
			setValue('id', `${post.id}`)
		}
		
	}, [post])

	return error;


}
