import {Link} from 'react-router-dom'

const NavbarSignout = () => {
	return (
	      <Link to="/signout" className="text-gray-700 bg-gray-100 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300  md:hover:text-blue-700 md-hoverfont-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Выйти</Link>

	)
}

export default NavbarSignout
