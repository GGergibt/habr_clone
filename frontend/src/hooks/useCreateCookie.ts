import { useCookies } from 'react-cookie'
import { useEffect } from 'react'

import {IToken} from '../models/models'


export const useCreateCookieToken = (response: IToken | undefined) => {
	const [cookies, setCookie] = useCookies(['token'])

	useEffect(() => {
		let expires = new Date()

	        expires.setTime(expires.getTime() + (20000 * 6000))
		response && setCookie('token', response.token, {path: '/', expires})
	}, [response])

	return (cookies)

}
