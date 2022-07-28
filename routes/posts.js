import {Router} from 'express';
import {createPost, getPost, allPosts, getLikesCount, likePost} from '../controllers/posts.js'
import {authenticateToken} from '../middlewares/jwtMiddlewares.js'
import {validatePostFields} from '../middlewares/validateRequestMiddlewares.js';


const router = Router()

router.post("/create", authenticateToken, validatePostFields, createPost)

router.get("/all", allPosts)

router.post("/:id/like", authenticateToken, likePost)

router.get("/:id/likes_count", getLikesCount)


router.get("/:id", getPost)


export default router
