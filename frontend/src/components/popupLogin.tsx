import {Dispatch, SetStateAction} from 'react'
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
const PopupLogin = ({setPopup}: {setPopup: Dispatch<SetStateAction<boolean>>}) => {
	return (

	<div className="overflow-y-auto fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
	    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
		<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
			<button onClick={() => {setPopup(false)}} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
				<FontAwesomeIcon icon={faXmark} />
		    </button>
		    <p>Вы не авторизованы</p>
		    <div className="p-6 text-center">
			<Link to="/login" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
			    Войти
			</Link>
		    </div>
		</div>
	    </div>
	</div>
	)
}

export default PopupLogin
