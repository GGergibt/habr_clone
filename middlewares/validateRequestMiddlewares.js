export const validateEmail = async (req, res, next) => {

	if (req.body.email.includes("@") & req.body.email.includes(".")) {
		next()
	}
	else {

		await res.status(400).json({"msg": "not valid email"})

	}

}
export const validateUserFields = async (req, res, next) => {
	if (!req.body.username || !req.body.email || !req.body.password) {

		await res.status(400).json({"msg": "fields required"})
	}
	else {
		next()
	}

}

