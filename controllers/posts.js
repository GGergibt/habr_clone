import {query} from '../db/connectDB.js';

export const createPost = async(req, res) => {
	const response = await query(`INSERT INTO posts(title, content, author_id) VALUES('${req.body.title}', '${req.body.content}', '${req.user.id}')`)

	res.status(201).json({"msg": "created"})

}

export const getPost = async(req, res) => {
	console.log("dsd")
	const response = await query(`SELECT * FROM posts WHERE id=${req.params.id}`)
	res.json({post: response[0]})
	res.end()
}

export const allPosts = async(req, res) => {
	const response = await query('SELECT * FROM posts')
	res.json({posts: response})
	res.end()
}
export const getLikesCount = async(req, res) => {
	const response = await query(`SELECT COUNT(user_id) as likes_count FROM likes_of_posts WHERE post_id=${req.params.id}`)
	const likesCount = response[0].likes_count
	res.json({"count": likesCount})
	res.end()
}

export const likePost = async(req, res) => {
	if (req.hasLike) {
		const response = await query(`DELETE FROM likes_of_posts WHERE user_id=${req.user.id} and post_id=${req.params.id}`)
		res.status(200).json({"msg": "like removed"})
		res.end()

	}
	else {
		const reponse = await query(`INSERT INTO likes_of_posts(user_id, post_id) VALUES(${req.user.id}, ${req.params.id})`)
		res.status(201).json({"msg": "like put"})
		res.end()
	}
}

