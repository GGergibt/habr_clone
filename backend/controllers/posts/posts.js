import {query} from '../../db/connectDB.js';

import path from 'path'

export const createPost = async(req, res) => {
	const __dirname = path.resolve();
	const imagePath = req.name? `/backend/Public/${req.name}`: null
	if (req.body.created_at) {
		const response = await query(`INSERT INTO posts(title, content, author_id, created_at, image_destination) VALUES('${req.body.title}', '${req.body.content}', '${req.user.id}', '${req.body.created_at}', '${imagePath}')`)
	}
	else{
		const response = await query(`INSERT INTO posts(title, content, author_id, image_destination) VALUES('${req.body.title}', '${req.body.content}', '${req.user.id}', '${imagePath ?? 'NULL'}')`)
	}

	res.status(201).json({"msg": "created"})

}

export const getPost = async(req, res) => {
	const response = await query(`SELECT title, content, image_destination, username as author, created_at FROM posts p JOIN user_table user ON user.id=author_id WHERE p.id=${req.params.id} `)
	res.json({post: response[0]})

	res.end()
}

export const allPosts = async(req, res) => {
	const response = await query('SELECT * FROM posts')
	res.json({posts: response})
	res.end()
}
