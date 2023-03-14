const Router = require('express')
const router = new Router()
const galleryController = require('../controllers/galleryController')
const checkRole = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/posts', galleryController.posts)
router.get('/post/:id', galleryController.post)
router.post('/post/create', authMiddleware, checkRole, galleryController.add)
router.put('/post/:id/update', authMiddleware, galleryController.update)
router.delete('/post/:id/delete', authMiddleware, galleryController.delete)

module.exports = router