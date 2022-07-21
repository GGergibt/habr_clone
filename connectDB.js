import mysql from 'mysql2/promise';


// const mysql = require('mysql2/promise');
//
// console.log(config)

const config = {
	db: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		port: process.env.DB_PORT
	}
}

export const query = async (sql, params) => {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);
  console.log(results)

  return results

}
