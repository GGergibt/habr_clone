import dotenv from 'dotenv';

dotenv.config()
export const config = {
	create_db: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		port: process.env.DB_PORT
	},
	db: {
		host: process.env.DB_HOST, 
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		port: process.env.DB_PORT
	}
}
