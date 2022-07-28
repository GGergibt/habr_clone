import {Router} from 'express';
import {createPost, getPost, allPosts} from '../controllers/posts/posts.js'
import {getLikesCount, likePost, isLikedAlready} from '../controllers/posts/likes.js'
import {authenticateToken} from '../middlewares/jwtMiddlewares.js'
import {validatePostFields} from '../middlewares/validateRequestMiddlewares.js';
import {hasUserLike} from '../middlewares/likesMiddlewares.js'
import likesRouter from './posts/likes.js'
import postRouter from './posts/posts.js'


const router = Router()



router.use(likesRouter)
router.use(postRouter)

export default router
