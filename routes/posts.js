import {Router} from 'express';
import {createPost} from '../controllers/posts.js'
import {authenticateToken} from '../middlewares/jwtMiddlewares.js'


const router = Router()

router.post("/create", authenticateToken, createPost)

export default router
