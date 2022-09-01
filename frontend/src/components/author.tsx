import {useAuthor} from '../hooks/useAuthor';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash} from '@fortawesome/free-solid-svg-icons'

const Author = ({postId}: {postId: number}) => {
	const isAuthor = useAuthor(postId)

	return (
		<>
		{ isAuthor && <div>
			<Link className="pr-2" to={`/blog/${postId}/delete`}>
				<FontAwesomeIcon icon={faTrash}/>
			</Link> 
			<Link className="pl-2" to={`/blog/${postId}/edit`}>
				<FontAwesomeIcon icon={faPen}/>
			</Link> 
			</div>
		}

		</>

	)
}

export default Author
