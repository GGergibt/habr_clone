import {Link, Outlet} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'

const Layout = () => {

	const {isAuthorizited} = useAuth()
	return (
		<>
			<div>
				
			{ isAuthorizited ?? 
				<>	
				<Link to="/signup">Sign up</Link>
				<Link to="/login">login</Link>
				</>
			}
			</div>


			<div>
			<Outlet/>
			</div>
		</>
	)

}

export default Layout

