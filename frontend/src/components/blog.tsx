// import {PostItem} from './postItem'
import {IPost} from '../models/models'

const Blog = ({post}: {post: IPost}) => {
	return (
		<>
		<div className="container">
			<h2 className="my-6">
				 {post.title} 
			</h2>

			<div>
				<img src={`http://localhost:8000/${post.image}`}>
				</img>

				<p>{post.content}</p>

			</div>
			<div>
				<p>{post.likes_count}</p>
			</div>
		</div>
		</>
	)
}
export default Blog

