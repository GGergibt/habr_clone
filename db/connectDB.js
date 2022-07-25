import {config} from './config.js';

import mysql from 'mysql2/promise';

export const query = async (sql, params) => {
  const connection = await mysql.createConnection(config.db)
  const [results, ] = await connection.execute(sql, params);

  return results
}
