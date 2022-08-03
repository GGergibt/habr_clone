import {IPost} from '../models/models';

import PostItem from './postItem';

const PostList = ({posts}: { posts : IPost[]}) => {
	// posts.map(post => console.log(post))
	return (
		<>
			<ul className="list-none ml-6 pt-4 "> 
			{posts.map(post => {return <PostItem post={post} key={post.id}/>})}
			</ul>
		</>
	)
}

export default PostList
