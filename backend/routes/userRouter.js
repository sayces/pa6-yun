const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const checkRole = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/signup', userController.signup)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, checkRole, userController.check)
router.put('/profile/:id/update', checkRole, userController.update_profile)
router.get('/profile/:id', userController.profile)
router.get('/list', checkRole(), userController.user_list)

module.exports = router