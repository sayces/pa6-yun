const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const checkRole = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/signup', userController.signup)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.put('/profile/:id/update', checkRole(1 || 2), userController.update_profile)
router.get('/profile/:id', userController.profile)
router.get('/list', checkRole(1), userController.user_list)

module.exports = router