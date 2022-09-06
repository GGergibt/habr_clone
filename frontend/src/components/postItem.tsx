import {IPost} from '../models/models'

import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons'
import Likes from './blogLikes';



const PostItem = ({ post }: { post: IPost}) => {
	console.log("postItem")
	console.log(post)
	return (
		<>
		<div className="container block p-6 my-5 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
		<Link to={`/blog/${post.id}`} >
			<div>
				<p>{post.author}</p>
			</div>
			<h2 className="my-6">
				<Link to={`/blog/${post.id}`}>
				 {post.title} 
				</Link> 
			</h2>

			<div className="">
				{<img  className="object-cover h-48 w-96 ..." src={`http://localhost:8000/${post.image}`}>
				</img>}

				<p>{post.description}</p>

			</div>
			{/* <div className="flex"> */}
			{/* 	<p>{post.likes_count}</p> */}
			{/* 	  <FontAwesomeIcon className="my-1 pl-1" icon={faHeartRegular} /> */}
			{/* </div> */}
			</Link>
			<Likes post={post}/>
		</div>

		</>
	)
}
export default PostItem
