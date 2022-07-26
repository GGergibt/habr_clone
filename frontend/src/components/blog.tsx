// import {PostItem} from './postItem'
import {IPost} from '../models/models'

const Blog = ({post}: {post: IPost}) => {
	return (
		<>
		<div>
			<h2 className="my-6">
				 {post.title} 
			</h2>

			<div>
				<img className="object-cover h-48 w-96 ..." src={`http://localhost:8000/${post.image}`}>
				</img>

				<p>{post.content}</p>

			</div>
		</div>
		</>
	)
}
export default Blog

