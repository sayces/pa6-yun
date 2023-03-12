const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/signup', userController.signup)
router.post('/login', userController.login)
router.get('/auth', userController.check)
router.put('/profile/:id/update', userController.update_profile)
router.get('/profile/:id', userController.profile)
router.get('/list', userController.user_list)

module.exports = router