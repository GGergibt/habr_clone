import {query} from '../connectDB.js';

import {generateAccessToken} from '../generateJWT.js';


export const createUser = async (req, res) => {
	try {
		await query(`INSERT INTO user_table(username, password, email, role) VALUES('${req.body.username}', '${req.body.password}', '${req.body.email}', 'simple_user');`)
		const token = await generateAccessToken({username: req.body.username})
		await res.status(201).json({"token": token})
		await res.end()

	} catch(err){
		if (err.code === 'ER_DUP_ENTRY') {
			await res.status(400).send("duplicate error. already exists")

			await res.end()
			}
		     }

	}

