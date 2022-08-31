import {useSignout} from '../hooks/useSignout'
import {useEffect} from 'react'

const SignoutPage = () => {
	const signout = useSignout()

	useEffect(() => {
		signout()
	}
	
	, [])
	return (
		<p>signout...</p>
	)
}

export default SignoutPage

