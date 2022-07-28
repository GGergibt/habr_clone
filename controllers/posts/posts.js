import {query} from '../../db/connectDB.js';

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
