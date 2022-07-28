import {Router} from 'express';
import {createPost, getPost, allPosts} from '../../controllers/posts/posts.js'
import {authenticateToken} from '../../middlewares/jwtMiddlewares.js'
import {validatePostFields} from '../../middlewares/validateRequestMiddlewares.js';


const router = Router()


router.post("/create", authenticateToken, validatePostFields, createPost)

router.get("/all", allPosts)

router.get("/:id", getPost)


export default router
