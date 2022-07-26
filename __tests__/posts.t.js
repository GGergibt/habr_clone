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
