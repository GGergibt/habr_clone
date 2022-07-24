import jwt from 'jsonwebtoken';
import {query} from '../connectDB.js'

// export const generateAccessToken = async (name) => {
// 	return await jwt.sign({username: name}, process.env.TOKEN_SECRET, { expiresIn: '180000s' });
// }
export const generateAccessToken = async (name) => {
	const response = await query(`SELECT id from user_table WHERE username='${name}'`)
	const id = response[0].id

	return jwt.sign({id: id, username: name}, process.env.TOKEN_SECRET, { expiresIn: '1800000s' });
}
