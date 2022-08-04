export const descriptionForPostIfEmpty = (req, res, next) => {
	if (!req.body.description) {
		req.body.description = req.body.content.substring(0, 256)
	}
	next()
}
