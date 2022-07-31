import {Router} from 'express';
import {createPost, getPost, allPosts, deletePost} from '../../controllers/posts/posts.js'
import {authenticateToken} from '../../middlewares/jwtMiddlewares.js'
import {validatePostFields} from '../../middlewares/validateRequestMiddlewares.js';
import {upload} from '../../middlewares/uploadMiddleware.js'
import {isAuthor} from '../../middlewares/isUserAuthorMiddleware.js'



const router = Router()


router.post("/create", authenticateToken, upload.single('image'), validatePostFields, createPost)

router.get("/all", allPosts)

router.get("/:id", getPost)

router.get("/:id/is_author", authenticateToken, isAuthor, (req, res) => {res.json({msg: "user is author"})})

router.delete("/:id/delete", authenticateToken, isAuthor, deletePost)

export default router
