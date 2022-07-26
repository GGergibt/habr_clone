
import request from 'supertest';

import app from '../index.js';
import {user_table} from '../models.js';

import {createDB, createTables, getSession} from '../db/utils.js';

const connectionCreate = await createDB()
///creaing db. db_name gets from envExport.js which export mock env values via jest config

const connection = await getSession()



createTables(connection)
///create tables in created mock database


const userModel = {
	username: "user",
	password: "123",
	email: "userf@ex.com"
}
const userModelWithoutEmail = {
	username: "user",
	password: "123"
}

const emailValidationError = async (email) => {
	userModel.email = email
	const res = await request(app).post('/api/users/create').send(userModel)
	expect(res.statusCode).toBe(400);
	expect(res.body.msg).toBeTruthy()
	expect(res.body.msg).toBe("not valid email")
}

const emptyFieldError = async (model) => {
	const res = await request(app).post('/api/users/create').send(model)
	expect(res.statusCode).toBe(400)
	expect(res.body.msg).toBeTruthy()
	expect(res.body.msg).toBe("fields required")

}

describe('test users routes', () => {

	describe('create user route', () => {
		test('create user', async () => {
			const res = await request(app).post('/api/users/create').send(userModel)
			expect(res.statusCode).toBe(201);
			expect(res.body.token).toBeTruthy()

		})

		test('catch duplicate user', async () => {
			const res = await request(app).post('/api/users/create').send(userModel)
			expect(res.statusCode).toBe(400);
			expect(res.body.msg).toBeTruthy()
			expect(res.body.msg).toBe("duplicate error. already exists")
		

		})
		test('catch empty field error', async () => {
			userModel.password = ""

			await emptyFieldError(userModel)
			userModel.password = "123"
			await emptyFieldError(userModelWithoutEmail)

		})
		test ('catch validation email field error', async () => {
			await emailValidationError('jsfsd')
			await emailValidationError('jsfs.')
			await emailValidationError('jsdfsdf@s:')

		})
	})

	describe('login route', () => {
		///login testing based on user that has been creating in create route testing. So for correct work must testing create route first
		test('login user', async () => {
			const res = await request(app).post('/api/users/login').send(userModelWithoutEmail)
			expect(res.statusCode).toBe(200)
			expect(res.body.token).toBeTruthy()

		})
		test('catch not exists login error', async () => {
			userModelWithoutEmail.username = "jfds"
			const res = await request(app).post('/api/users/login').send(userModelWithoutEmail)
			expect(res.statusCode).toBe(404)
			expect(res.body.msg).toBeTruthy()
			expect(res.body.msg).toBe("user does not exist")
		})
		test('catch not valid password error', async () => {
			userModelWithoutEmail.username = "user"
			userModelWithoutEmail.password = "user"
			const res = await request(app).post('/api/users/login').send(userModelWithoutEmail)
			expect(res.statusCode).toBe(400)
			expect(res.body.msg).toBeTruthy()
			expect(res.body.msg).toBe("password authentication failed")

		})
	})
})

