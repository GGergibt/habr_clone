import request from 'supertest';

import app from '../index.js';
import {user_table} from '../models.js';

import {createDB, createTables, getSession} from '../db/utils.js';

const connectionCreate = await createDB()
////creaing db. db_name gets from envExport.js which export mock env values via jest config

const connection = await getSession()

createTables(connection)
///create tables in created mock database

const userModel = {
	username: "userff",
	password: "123s",
	email: "user@ex.com"
}
const postModel = {
	title: "sdfsfuser",
	content: "sdfasdfdsf123"
}
describe('test posts routes', () => {
	test('create post', async () => {
		const res = await request(app).post("/api/users/create").send(userModel)
		expect(res.statusCode).toBe(201)
		expect(res.body.token).toBeTruthy()
		const token = res.body.token
		const response = await request(app).post("/api/posts/create").send(postModel).set({Authorization: `Bearer ${token}`})
		expect(response.statusCode).toBe(201)
	})

})
