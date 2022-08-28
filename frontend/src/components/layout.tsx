import {Link, Outlet} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'
import { Menu } from '@headlessui/react'
import NavbarAuth from './layout/navbarAuth'
import NavbarSignout from './layout/navbarSignout'

const Layout = () => {

	const user = useAuth()
	console.log(user.isAuthorizited)
	console.log(typeof user.isAuthorizited)
	return (
	<>
	  <div className="container flex flex-wrap justify-between items-center mx-auto">
		      <div className="flex md:order-2">
			      {user.isAuthorizited ? <NavbarSignout/>: <NavbarAuth/>}
			  </div>
		      <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
			    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
			      <li>
			      </li>
			      <li>
				<Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Главная</Link>
			      </li>
			    </ul>
		      </div>

	  </div>

	  <div className="flex justify-center">
		<Outlet/>
	  </div>
	</>
	)

}

export default Layout

