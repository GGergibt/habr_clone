import {useCookies} from 'react-cookie'
export const useAuth = () => {
	const [cookies, setCookies] = useCookies()

	const isAuthorizited = cookies.token ? true : false

	return {
		isAuthorizited: isAuthorizited
	}
}
