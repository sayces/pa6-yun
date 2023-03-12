const Router = require('express')
const router = new Router()
const galleryController = require('../controllers/galleryController')

router.get('/', galleryController.posts)
router.get('/:id', galleryController.post)
router.post('/create_post', galleryController.addPost)
router.put('/update/:id', galleryController.updatePost)
router.delete('/delete/:id', galleryController.deletePost)

module.exports = router