import {config} from './config.js';

import mysql from 'mysql2/promise';

import {posts, user_table, likes_of_posts} from '../models.js';

export const createDB = async () => {
	console.log(process.env.DB_NAME, "create")
	const connection = await mysql.createConnection(config.create_db);
	await connection.execute(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`)
	return connection
}

export const getSession = async () => {
	const connection = await mysql.createConnection(config.db)
	return connection
}
export const createTables = async (connection) => {
	await connection.execute(user_table)
	await connection.execute(posts)
	await connection.execute(likes_of_posts)

}
