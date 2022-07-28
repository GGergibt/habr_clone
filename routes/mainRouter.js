import {Router} from 'express';

import userRouter from './userRouter.js'

import postRouter from './postRouter.js'


const router = Router()

await router.use("/user", userRouter)
await router.use("/post", postRouter)





export default router

