import isUserAuthor from '../utils/isAuthor.js';

export const isAuthor = async (req, res, next) => {
	const check = await isUserAuthor(req)
	if (check === "post with this id does not exist") {
		res.status(404).json({msg: check})
	}
	else {
		if (check) {

			next()
		}
		else {
			res.status(403).json({is_author: false})
		}
	}
}
