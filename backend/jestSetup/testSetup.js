import {createDB, createTables, getSession} from '../db/utils.js';

beforeAll(async () => {
	const connectionCreate = await createDB()
	///creaing db. db_name gets from envExport.js which export mock env values via jest config
	const connection = await getSession()


	createTables(connection)
	///create tables in created mock database
})
