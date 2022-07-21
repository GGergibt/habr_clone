import jwt from 'jsonwebtoken';

export const generateAccessToken = async (username) => {
  return await jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '180000s' });
}
