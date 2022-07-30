import {query} from '../db/connectDB.js'

export const hasUserLike = async (req, res, next) => {
	const checkUserHasLike = await query(`SELECT * FROM likes_of_posts WHERE user_id=${req.user.id} and post_id=${req.params.id}`)
	if (checkUserHasLike.length > 0) {
		req.hasLike = true
		next()
	}
	else{
		req.hasLike = false
		next()
	}
}
