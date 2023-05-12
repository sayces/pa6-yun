
const Router = require('express')
const router = new Router()
const appointController = require('../controllers/appointController')

router.get('/appoint/:id', appointController.findOneAppoint)
router.get('/', appointController.getAllAppoint)
router.post('/get', appointController.appoint)
router.delete('/appoint/delete/:id', appointController.deleteAppoint)
router.put('/appoint/update/:id', appointController.editAppoint)

module.exports = router