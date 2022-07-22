import bcrypt from 'bcrypt';
import {query} from '../connectDB.js'

// export const hashPassword = async(password) => {
export const hashPassword = async (password) => {

	const salt = await bcrypt.genSalt(10)

	const hash =  await bcrypt.hash(password, salt)
	return hash 
}

export const isPasswordValid = async (password, email) => {

      const hashPassword = query(`SELECT password FROM user_table WHERE email='${email}'`)
      const validPassword = await bcrypt.compare(password, hashPassword);
      return validPassword
}
