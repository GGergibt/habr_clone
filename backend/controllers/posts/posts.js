import {query} from '../../db/connectDB.js';


export const createPost = async(req, res) => {
	const imagePath = req.body.filename? req.body.filename: null
	if (req.body.created_at) {
		const response = await query(`INSERT INTO posts(title, content, author_id, created_at, image, description) VALUES('${req.body.title}', '${req.body.content}', '${req.user.id}', '${req.body.created_at}', '${imagePath}', '${req.body.description}')`)
	}
	else{
		const response = await query(`INSERT INTO posts(title, content, author_id, image, description) VALUES('${req.body.title}', '${req.body.content}', '${req.user.id}', '${imagePath ?? 'NULL'}', '${req.body.description}')`)
	}

	res.status(201).json({"msg": "created"})

}

export const updatePost = async(req, res) => {
	const imagePath = req.body.filename? req.body.filename: null
	// console.log(imagePath)
	if (req.body.created_at) {
		const response = await query(`UPDATE posts SET title='${req.body.title}', content='${req.body.content}', description='${req.body.description}', image='${imagePath ?? 'NULL'}' WHERE id=${req.params.id}`)
	}
	else{
		const response = await query(`UPDATE posts SET title='${req.body.title}', content='${req.body.content}', description='${req.body.description}', image='${imagePath ?? 'NULL'}' WHERE id=${req.params.id}`)
	}

	res.status(201).json({"msg": "updated"})

}

export const getPost = async(req, res) => {
	const response = await query(`SELECT p.id, title, description, content, image, username as author, created_at, COUNT(user_id) as likes_count FROM posts p JOIN user_table user ON user.id=author_id LEFT JOIN likes_of_posts ON p.id=post_id WHERE p.id=${req.params.id} `)
	res.json({post: response[0]})

	res.end()
}

export const allPosts = async(req, res) => {
	const response = await query('SELECT p.id, title, description, content, image, username as author, created_at, COUNT(user_id) as likes_count FROM posts p JOIN user_table user ON user.id=author_id LEFT JOIN likes_of_posts ON p.id=post_id GROUP BY p.id')
	res.json({posts: response})
	res.end()
}

export const userPosts = async(req, res) => {
	const response = await query(`SELECT p.id, title, description, content, image, username as author, created_at, COUNT(user_id) as likes_count FROM posts p JOIN user_table user ON user.id=author_id LEFT JOIN likes_of_posts ON p.id=post_id WHERE user.id=${req.user.id} GROUP BY p.id`)
	res.json({posts: response})
	res.end()
}


export const deletePost = async(req, res) => {
	const response = await query(`DELETE FROM posts WHERE id=${req.params.id}`)
	res.json({msg: "sucessfull deleting"})
	res.end()
}
