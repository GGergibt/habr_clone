import {query} from '../db/connectDB.js';

import {generateAccessToken} from '../utils/generateJWT.js';

import {hashPassword} from '../utils/hashPassword.js';


export const createUser = async (req, res) => {
	const hash = await hashPassword(req.body.password)
	try {
		await query(`INSERT INTO user_table(username, password, email, role) VALUES('${req.body.username}', '${hash}', '${req.body.email}', 'simple_user');`)
		const token = await generateAccessToken(req.body.username)
		await res.status(201).json({"token": token})
		await res.end()

	} catch(err){
		if (err.code === 'ER_DUP_ENTRY') {
			await res.status(400).send("duplicate error. already exists")

			await res.end()
			}
		     }

	}

export const loginUser = async (req, res) => {
	const token = await generateAccessToken(req.body.username)
	await res.json({"token": token})

}

