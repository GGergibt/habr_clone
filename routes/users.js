import {Router} from 'express';

import {createUser} from '../controllers/users.js'


const router = Router()


await router.post("/create", createUser)

export default router

