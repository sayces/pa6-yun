
const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const checkRole = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleware')
const roleController = require('../controllers/roleController')

router.post('/signup', userController.signup)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.auth)

router.get('/users', userController.getAllUsers)
router.get('/user/:id', userController.getOneUser)
router.put('/user/:id', userController.updateUser)
router.get('/roles', roleController.getAllRoles)

module.exports = router