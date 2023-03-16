const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const checkRole = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/signup', userController.signup)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.put('/profile/:id/update', userController.update_profile)
router.get('/profile/:id', userController.profile)
router.get('/', userController.getAllRoles)

module.exports = router