import {Router} from 'express';

import userRouter from './users.js'

import postRouter from './posts.js'


const router = Router()

await router.use("/user", userRouter)
await router.use("/post", postRouter)





export default router

