import {query} from '../db/connectDB.js'

const isUserAuthor = async (req) => {
	const response = await query(`SELECT author_id from posts WHERE id=${req.params.id} `)
	if (response.length > 0) {
		if (req.user.id === response[0].author_id) {
			return true
		}
		else{
			return false
		}
	}
	else{
		return "post with this id does not exist"
	}
}

export default isUserAuthor
