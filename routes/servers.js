import {Router} from 'express';

import userRouter from './users.js'

import {validateEmail, validateUserFields} from '../middlewares/validateRequestMiddlewares.js'

const router = Router()

await router.use(validateUserFields)
await router.use(validateEmail)
await router.use("/users", userRouter)





export default router

