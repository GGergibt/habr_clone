import {Router} from 'express';
import {createPost, getPost, allPosts} from '../controllers/posts/posts.js'
import {getLikesCount, likePost, isLikedAlready} from '../controllers/posts/likes.js'
import {authenticateToken} from '../middlewares/jwtMiddlewares.js'
import {validatePostFields} from '../middlewares/validateRequestMiddlewares.js';
import {hasUserLike} from '../middlewares/likesMiddlewares.js'


const router = Router()


router.post("/create", authenticateToken, validatePostFields, createPost)

router.get("/all", allPosts)

router.post("/:id/like", authenticateToken, hasUserLike, likePost)

router.get("/:id/is_liked", authenticateToken, hasUserLike, isLikedAlready)

router.get("/:id/likes_count", getLikesCount)

router.get("/:id", getPost)


export default router
