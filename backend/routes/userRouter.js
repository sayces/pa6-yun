const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const checkRole = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleware')
const roleController = require('../controllers/roleController')

router.post('/signup', userController.signup)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)

router.get('/', userController.getAllUsers)
router.get('/', roleController.getAllRoles)


module.exports = router