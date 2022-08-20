import {useSignout} from '../hooks/useSignout'
import {useEffect} from 'react'

const SignoutPage = () => {
	const signout = useSignout()

	useEffect(
		signout
	
	)
	return (
		<p>deleting...</p>
	)
}

export default SignoutPage

