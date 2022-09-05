import {IPost} from '../models/models'
import {useState, useEffect} from 'react'
import {useLikePostMutation} from '../store/post.api'
import {useLazyIsLikedQuery} from '../store/post.api'
import {useAuth} from '../hooks/useAuth'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons'
import PopupLogin from './popupLogin' 

const Likes = ({post}: {post: IPost}) => {
	const [likeSend, {isLoading, isError, data: response, error}] = useLikePostMutation()
	const [popup, setPopup] = useState(false)
	const [hasLike, setHasLike] = useState(false)
	const [likesCount, setLikesCount] = useState(post.likes_count)
	const user = useAuth()

	const [isLiked, {data, error: e}] = useLazyIsLikedQuery()

	useEffect(() => {
		if (user.isAuthorizited) {
			isLiked({token: user.token, postId: post.id})
		}

		if (response) {
			response.msg === 'like put'? setLikesCount(likesCount + 1) : setLikesCount(likesCount -1)
		}
	}
	, [response])

	useEffect(() => {
		if (data) {

			 data.has_like? setHasLike(true): setHasLike(false)
		}


	}, 
		  [data])

	response && console.log(response)

	data && console.log(data)
	error && console.log(error)


	const likeSubmit = (event: React.FormEvent) => {
	    	event.preventDefault();
		user.isAuthorizited? likeSend({id: post.id, token: user.token}): setPopup(true)

	}
	return (
		<>
			<div className="container flex my-3">
				<p>{likesCount}</p>
				<button className="pl-1" type='button' onClick={likeSubmit}>

					{hasLike? <FontAwesomeIcon icon={faHeartSolid}/>: <FontAwesomeIcon icon={faHeartRegular} />}
				</button>
			</div>
			{popup && <PopupLogin setPopup={setPopup}/>}

		</>
	)
}
export default Likes
