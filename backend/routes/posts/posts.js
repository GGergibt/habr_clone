import {Router} from 'express';
import {createPost, getPost, allPosts} from '../../controllers/posts/posts.js'
import {authenticateToken} from '../../middlewares/jwtMiddlewares.js'
import {validatePostFields} from '../../middlewares/validateRequestMiddlewares.js';
import {upload} from '../../middlewares/uploadMiddleware.js'



const router = Router()


router.post("/create", authenticateToken, upload.single('image'), validatePostFields, createPost)

router.get("/all", allPosts)

router.get("/:id", getPost)

router.post("/test_upload", upload.single('file'), (req, res) => {
	console.log(req.name)
	res.send("OK")
})



export default router
