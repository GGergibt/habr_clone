import {query} from '../../db/connectDB.js';

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
