import {useCookies} from 'react-cookie'
import {useLazyIsAuthorQuery} from '../store/post.api'
import {useEffect, useState} from 'react'

export const useAuthor = (postId: number) => {
	const [cookies, setCookies] = useCookies()
	const [isAuthor, setIsAuthor] = useState(false)
	const [isAuthorQuery, {isLoading, isError, data, error}] = useLazyIsAuthorQuery()
	const authModel = {
		id: postId,
		token: cookies.token
	}
	useEffect(() => {
		cookies.token && isAuthorQuery(authModel)
	}
	, [cookies.token])

	const isAuthorCheck = () => {
		if (data) {
			setIsAuthor(true)
		}
		else if (error) {
			setIsAuthor(false)

		}

	}

	useEffect(isAuthorCheck, [data, error])

	console.log(cookies)
	console.log(data)
	console.log(error)
	console.log(isAuthor)


	return isAuthor
	


}

