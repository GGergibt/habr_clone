import {query} from '../connectDB.js';

import {generateAccessToken} from '../jwtLogic.js';



export const createUser = async (req, res) => {
	await query(`INSERT INTO user_table(username, password, email, role) VALUES('${req.body.username}', '${req.body.password}', '${req.body.email}', 'simple_user');`)

	const token = await generateAccessToken({username: req.body.username})
	res.status(201).json(token)

}
