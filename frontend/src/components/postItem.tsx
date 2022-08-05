import {IPost} from '../models/models'

import {Link} from 'react-router-dom';


const PostItem = ({ post }: { post: IPost}) => {
	console.log("postItem")
	return (
		<>
		<div className="container">
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
		</div>
		</>
	)
}
export default PostItem
