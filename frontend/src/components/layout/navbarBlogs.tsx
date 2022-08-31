
import {Link} from 'react-router-dom'

const NavbarBlogs = () => {
	return (
		<>
			<li>
				<Link to="/blog/my" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Мои статьи</Link>

			</li>
			<li>
				<Link to="/blog/create" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Создать статью</Link>
			</li>
		</>

	)
}
export default NavbarBlogs
