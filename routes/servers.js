import {Router} from 'express';

import userRouter from './users.js'

import postRouter from './posts.js'


const router = Router()

await router.use("/users", userRouter)
await router.use("/posts", postRouter)





export default router

