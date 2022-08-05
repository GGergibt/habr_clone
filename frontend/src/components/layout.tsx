import {Link, Outlet} from 'react-router-dom'

const Layout = () => {
	return (
		<>
			<div>
			<Link to="/signup">Sign up</Link>
			<Link to="/login">login</Link>
			</div>

			<div>
			<Outlet/>
			</div>
		</>
	)

}

export default Layout

