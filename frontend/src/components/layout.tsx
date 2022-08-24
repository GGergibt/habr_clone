import {Link, Outlet} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'
import { Menu } from '@headlessui/react'

const Layout = () => {

	const user = useAuth()
	console.log(user.isAuthorizited)
	console.log(typeof user.isAuthorizited)
	return (
	<>
				

	      <Menu>
		      <Menu.Button>More</Menu.Button>
		      <Menu.Items>
			{ user.isAuthorizited ??
				<Menu.Item>
				  {({ active }) => (
					  <>
						<Link className="block" to="/login">login</Link>
						<Link className="block" to="/signup">Sign up</Link>
					</>
				  )}
				</Menu.Item>
			      }
			{user.isAuthorizited && 
				<Menu.Item>
				  {({ active }) => (
					<>
						<Link className="block" to="/signout">Signout</Link>
						<Link className="block" to="blog/my">my blogs</Link>
					</>
				  )}
				</Menu.Item>
			      }

		      </Menu.Items>
	    </Menu>



	    <div>
		<Outlet/>
	    </div>
	</>
	)

}

export default Layout

