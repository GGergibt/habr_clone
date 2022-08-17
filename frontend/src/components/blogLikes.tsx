import {IPost} from '../models/models'
import {useState} from 'react'
import {useLikePostMutation} from '../store/post.api'
import React from 'react'

const Likes = ({post}: {post: IPost}) => {
	const [state, setState] = useState('')
	const [likeSend, {isLoading, isError, data: response, error}] = useLikePostMutation()
	response && console.log(response)
	error && console.log(error)

	const likeSubmit = (event: React.FormEvent) => {
	    	event.preventDefault();
		likeSend(post.id)

	}
	return (
		<>
			<form onSubmit={likeSubmit}>
				<p>{post.likes_count}</p>
				<button type='submit'>Like</button>
			</form>

		</>
	)
}
export default Likes
