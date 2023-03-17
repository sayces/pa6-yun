const Router = require('express')
const router = new Router()
const appointController = require('../controllers/appointController')

router.get('/',appointController.getMine)
// router.get('/calendar/:id',)
router.get('/',appointController.getAll)
router.post('/',appointController.create)
router.put('/',appointController.update)
router.delete('/', appointController.delete)


module.exports = router