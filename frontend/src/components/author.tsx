import {useAuthor} from '../hooks/useAuthor';
import {Link} from 'react-router-dom'

const Author = ({postId}: {postId: number}) => {
	const isAuthor = useAuthor(postId)
	console.log(isAuthor)


	return (
		<>
		<Link to={`/blog/${postId}/delete`}>
			Delete
		</Link> 
		</>

	)
}

export default Author
