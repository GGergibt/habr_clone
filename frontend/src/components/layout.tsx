import {Link, Outlet} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'
import {useSignout} from '../hooks/useSignout'

const Layout = () => {

	const user = useAuth()
	const signout = useSignout()
	console.log(user.isAuthorizited)
	console.log(typeof user.isAuthorizited)
	return (
		<>
			<div>
				
			{ user.isAuthorizited ??
				<>	
				<Link to="/signup">Sign up</Link>
				<Link to="/login">login</Link>
				</>
			}
				
			{user.isAuthorizited && 
				<form onSubmit={signout}>
					<button type="submit">Sign out</button>
				</form>
					}
			</div>


			<div>
			<Outlet/>
			</div>
		</>
	)

}

export default Layout

