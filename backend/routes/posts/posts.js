import {Router} from 'express';
import {createPost, getPost, allPosts, deletePost, updatePost} from '../../controllers/posts/posts.js'
import {authenticateToken} from '../../middlewares/jwtMiddlewares.js'
import {validatePostFields, isPostExists} from '../../middlewares/validateRequestMiddlewares.js';
import {upload} from '../../middlewares/uploadMiddleware.js'
import {isAuthor} from '../../middlewares/isUserAuthorMiddleware.js'
import {descriptionForPostIfEmpty} from '../../middlewares/createDescriptionForPostIfEmptyMiddleware.js'



const router = Router()


router.post("/create", authenticateToken, upload.single('image'), validatePostFields, descriptionForPostIfEmpty, createPost)

router.get("/all", allPosts)

router.get("/:id", isPostExists, getPost)

router.put("/update", authenticateToken, upload.single('image'), validatePostFields, descriptionForPostIfEmpty, updatePost)


router.get("/:id/is_author", authenticateToken, isAuthor, (req, res) => {res.json({is_author: true})})

router.delete("/:id/delete", authenticateToken, isAuthor, deletePost)

export default router
