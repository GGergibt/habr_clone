import {Router} from 'express';

import {createUser} from '../controllers/users.js'


const router = Router()


router.post("/create", createUser)

export default router

