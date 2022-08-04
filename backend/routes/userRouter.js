import {Router} from 'express';

import {createUser, loginUser, getCurrentUser} from '../controllers/users.js'
import {isPasswordValid} from '../middlewares/validateRequestMiddlewares.js'

import {validateEmail, validateUserFields, isUserExists} from '../middlewares/validateRequestMiddlewares.js'



const router = Router()

await router.post("/login", isPasswordValid, loginUser)


await router.post("/create", validateUserFields, validateEmail, createUser)

await router.get("/get/:id", isUserExists, getCurrentUser)


export default router

