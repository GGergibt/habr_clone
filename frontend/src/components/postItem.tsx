import {IPost} from '../models/models'

import {Link} from 'react-router-dom';


const PostItem = ({ post }: { post: IPost}) => {
	console.log("postItem")
	console.log(post)
	return (
		<>
		<Link to={`/blog/${post.id}`} className="container block p-6 my-5 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
			<div>
				<p>{post.author}</p>
			</div>
			<h2 className="my-6">
				<Link to={`/blog/${post.id}`}>
				 {post.title} 
				</Link> 
			</h2>

			<div>
				<img src={`http://localhost:8000/${post.image}`}>
				</img>

				<p>{post.description}</p>

			</div>
			<div>
				<p>{post.likes_count}</p>
			</div>
		</Link>
		</>
	)
}
export default PostItem
