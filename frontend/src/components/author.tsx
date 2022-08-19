import {useAuthor} from '../hooks/useAuthor';
import {Link} from 'react-router-dom'

const Author = ({postId}: {postId: number}) => {
	const isAuthor = useAuthor(postId)

	return (
		<>
		{ isAuthor && <div>
			<Link to={`/blog/${postId}/delete`}>
				Delete
			</Link> 
			<Link to={`/blog/${postId}/edit`}>
				edit
			</Link> 
			</div>
		}

		</>

	)
}

export default Author
