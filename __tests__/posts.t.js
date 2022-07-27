import request from 'supertest';

import app from '../app.js';

const userModel = {
	username: "userff",
	password: "123s",
	email: "user@ex.com"
}
const postModel = {
	title: "sdfsfuser",
	content: "sdfasdfdsf123"
}
const tokenAuth = {
	Authorization: 'Bearer'
}
describe('test posts routes', () => {
	describe('create post route', () => {
		test('create post', async () => {
			const res = await request(app).post("/api/user/create").send(userModel)
			expect(res.statusCode).toBe(201)
			expect(res.body.token).toBeTruthy()
			const token = res.body.token
			tokenAuth.Authorization = `Bearer ${token}`
			const response = await request(app).post("/api/post/create").send(postModel).set(tokenAuth)
			expect(response.statusCode).toBe(201)
			expect(response.body.msg).toBeTruthy()
			expect(response.body.msg).toBe('created')
		})
		test('catch error creating post with empty body params', async () => {
			postModel.title = ""
			const response = await request(app).post("/api/post/create").send(postModel).set(tokenAuth)
			expect(response.statusCode).toBe(400)
			expect(response.body.msg).toBe("fields required")
			})
		test('catch error not authorized', async () => {
			postModel.title = "fsdfsfs"
			const response = await request(app).post("/api/post/create").send(postModel)
			expect(response.statusCode).toBe(401)
			expect(response.text).toBe("Unauthorized")

		})

	})
	describe('get posts', () => {
		test('get all post', async () => {
			const response = await request(app).post("/api/post/all")
			expect(response.statusCode).toBe(200)
			expect(response.posts).toBeTruthy()



		})
		test('get post', async () => {
			const response = await request(app).post("/api/post/1")
			expect(response.statusCode).toBe(200)
			expect(response.body.title).toBe('sdfsfuser')
		})
	})
})
