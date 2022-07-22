import {Router} from 'express';

import {createUser, loginUser} from '../controllers/users.js'
import {isPasswordValid} from '../middlewares/validateRequestMiddlewares.js'



const router = Router()


await router.post("/create", createUser)

await router.post("/login", isPasswordValid, loginUser)

export default router

