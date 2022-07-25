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
const emailValidationError = async (email) => {
	user_model.email = email
	const res = await request(app).post('/api/users/create').send(user_model)
	console.log(email, res.body.msg)
	expect(res.statusCode).toBe(400);
	expect(res.body.msg).toBeTruthy()
	expect(res.body.msg).toBe("not valid email")
}

describe('test creating user route', () => {
	test('create user', async () => {
		const res = await request(app).post('/api/users/create').send(user_model)
		console.log(res.body.token)
		console.log(process.env.DB_NAME)
		expect(res.statusCode).toBe(201);
		expect(res.body.token).toBeTruthy()

	})

	test('catch duplicate user', async () => {
		const res = await request(app).post('/api/users/create').send(user_model)
		console.log(res.body.msg)
		expect(res.statusCode).toBe(400);
		expect(res.body.msg).toBeTruthy()
		expect(res.body.msg).toBe("duplicate error. already exists")
	

	})
	test ('catch validation email field error', async () => {
		await emailValidationError('jsfsd')
		await emailValidationError('jsfs.')
		await emailValidationError('jsdfsdf@s:')

	})
})
afterAll(done => {
  connectionCreate.execute(`DROP DATABASE ${process.env.DB_NAME}`)
  done()
})
