import {Router} from 'express';

import {createUser, loginUser} from '../controllers/users.js'
import {isPasswordValid} from '../middlewares/validateRequestMiddlewares.js'

import {validateEmail, validateUserFields} from '../middlewares/validateRequestMiddlewares.js'



const router = Router()

await router.post("/login", isPasswordValid, loginUser)


await router.post("/create", validateUserFields, validateEmail, createUser)


export default router

