import {query} from '../db/connectDB.js';
import bcrypt from 'bcrypt';

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

export const isPasswordValid = async (req, res, next) => {

      const response = await query(`SELECT password FROM user_table WHERE username='${req.body.username}'`)
      if (response.length > 0) {
	      const hashPassword = response[0].password
	      const validPassword = await bcrypt.compare(req.body.password, hashPassword);
	      if (validPassword) {
		      next()
	      }
	      else {
		      res.status(400).json({"msg": "password authentication failed"})
	      }
	      }
      else {
	      res.status(404).json({"msg": "user does not exist"})

      }


}

export const validatePostFields = async (req, res, next) => {
	if (!req.body.content || !req.body.title) {
		await res.status(400).json({"msg": "fields required"})
	}
	else {
		next()
	}

}

export const isUserExists = async(req, res, next) => {
	if(!req.params.id) {
		await res.status(400).json({"msg": "id required"})
	}
	else {
		const response = await query(`SELECT username FROM user_table WHERE id=${req.params.id}`)	
		if (response.length > 0) {
			req.user = response[0]
			next()
		}
		else{
		      res.status(404).json({"msg": "user does not exist"})
		}
	}
}

