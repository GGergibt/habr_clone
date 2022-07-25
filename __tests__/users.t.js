process.env['DB_NAME'] = 'test_express_db';

import request from 'supertest';

import app from '../index.js';
import {user_table} from '../models.js';

import {createDB, createTables, getSession} from '../db/utils.js';

const connectionCreate = await createDB()

const connection = await getSession()





createTables(connection)

const user_model = {
	username: "user",
	password: "123",
	email: "user@ex.com"
}


describe('test creating user route', () => {
	test('create user', async () => {
		const res = await request(app).post('/api/users/create').send(user_model)
		console.log(res.body.token)
		console.log(process.env.DB_NAME)
		expect(res.statusCode).toBe(201);
		expect(res.body.token)

	})

	test('catch duplicate user', async () => {
		const res = await request(app).post('/api/users/create').send(user_model)
		console.log(res.body.msg)
		expect(res.statusCode).toBe(400);
		expect(res.body.msg)
		expect(res.body.msg === "duplicate error. already exists")

	}
	)
})
afterAll(done => {
  connectionCreate.execute(`DROP DATABASE ${process.env.DB_NAME}`)
  done()
})
