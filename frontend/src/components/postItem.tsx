import {IPost} from '../models/models'

const PostItem = ({ post }: { post: IPost}) => {
	return (
		<div className="container">
			<h1 className="my-6">{post.title}</h1>
		</div>
	)
}
export default PostItem
