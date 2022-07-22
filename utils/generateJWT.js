import jwt from 'jsonwebtoken';

// export const generateAccessToken = async (name) => {
// 	return await jwt.sign({username: name}, process.env.TOKEN_SECRET, { expiresIn: '180000s' });
// }
export const generateAccessToken = (name) => {
	return jwt.sign({username: name}, process.env.TOKEN_SECRET, { expiresIn: '180000s' });
}
