import {Router} from 'express';
import {getLikesCount, likePost, isLikedAlready} from '../../controllers/posts/likes.js'
import {authenticateToken} from '../../middlewares/jwtMiddlewares.js'
import {hasUserLike} from '../../middlewares/likesMiddlewares.js'

const router = Router()

router.post("/:id/like", authenticateToken, hasUserLike, likePost)

router.get("/:id/is_liked", authenticateToken, hasUserLike, isLikedAlready)

router.get("/:id/likes_count", getLikesCount)

export default router
