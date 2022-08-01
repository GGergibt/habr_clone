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
	describe('get routes of posts', () => {
		test('get all post', async () => {
			const response = await request(app).get("/api/post/all")
			expect(response.statusCode).toBe(200)
			expect(response.body.posts).toBeTruthy()



		})
		test('get post', async () => {
			const response = await request(app).get("/api/post/1")
			expect(response.statusCode).toBe(200)
			expect(response.body.post.title).toBe('sdfsfuser')
			expect(response.body.post.content).toBeTruthy()
			expect(response.body.post.author).toBeTruthy()
			expect(response.body.post.created_at).toBeTruthy()
		})
		test('get auth user are author',  async () => {
			const response = await request(app).get("/api/post/1/is_author").set(tokenAuth)
			expect(response.statusCode).toBe(200)
			expect(response.body.is_author).toBeTruthy()
			// expect(response.body.msg).toBe("user is author")

		})
		test('get auth user are not author', async () => {
			userModel.username = "gsdfsdfsfsijvsi"
			const res = await request(app).post("/api/user/create").send(userModel)
			expect(res.statusCode).toBe(201)
			expect(res.body.token).toBeTruthy()
			const anotherToken = {Authorization: `Bearer ${res.body.token}`}

			const response = await request(app).get("/api/post/1/is_author").set(anotherToken)
			expect(response.statusCode).toBe(403)
			expect(response.body.is_author).not.toBeTruthy()
			// expect()

		})
	})
	describe('likes test', () => {
		test('like post', async () => {
			const response = await request(app).post("/api/post/1/like").set(tokenAuth)
			expect(response.statusCode).toBe(201)
			expect(response.body.msg).toBe('like put')

		})

		test('get likes counter', async () => {
			const response = await request(app).get("/api/post/1/likes_count")
			expect(response.statusCode).toBe(200)
			expect(response.body.count).toBe(1)
		})

		test('remove like', async () => {
			const response = await request(app).post("/api/post/1/like").set(tokenAuth)
			expect(response.body.msg).toBe('like removed')
		})
		test('is user like this post', async () => {
			const response = await request(app).get("/api/post/1/is_liked").set(tokenAuth)
			expect(response.statusCode).toBe(200)
			expect(response.body.has_like).not.toBeTruthy()
		})
	})
	describe('delete posts', () => {
		test('catch user is not author error', async () => {
			userModel.username = "gsijvsi"
			const res = await request(app).post("/api/user/create").send(userModel)
			expect(res.statusCode).toBe(201)
			expect(res.body.token).toBeTruthy()
			const tokenSecond = {Authorization: `Bearer ${res.body.token}`}

			const response = await request(app).delete("/api/post/1/delete").set(tokenSecond)

			expect(response.statusCode).toBe(403)
			expect(response.body.is_author).not.toBeTruthy()
			// expect(response.body.msg).toBe("user are not author")
		})
		test('1 post', async () => {
			const response = await request(app).delete("/api/post/1/delete").set(tokenAuth)

			expect(response.statusCode).toBe(200)
			expect(response.body.msg).toBeTruthy()
			expect(response.body.msg).toBe("sucessfull deleting")

		})
		test('catch deleting not exist post', async () => {
			const response = await request(app).delete("/api/post/1/delete").set(tokenAuth)
			expect(response.statusCode).toBe(404)
			expect(response.body.msg).toBeTruthy()
			expect(response.body.msg).toBe("post with this id does not exist")
		})
	})
})
