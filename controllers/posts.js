import {query} from '../connectDB.js';

export const createPost = async(req, res) => {
	const response = await query(`INSERT INTO posts(title, content, author_id) VALUES('${req.body.title}', '${req.body.content}', '${req.user.id}')`)

	res.status(201).json({"msg": "created"})

}
