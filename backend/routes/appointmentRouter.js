
const Router = require('express')
const router = new Router()
const appointController = require('../controllers/appointController')

router.get('/appoint/:id', appointController.getOneAppoint)
router.get('/', appointController.getAllAppoints)
router.get('/statuses', appointController.getAllStatus)
router.get('/appoint-status', appointController.appoint_status)
router.get('/appoint-service', appointController.appoint_service)
router.post('/get', appointController.appoint)
router.delete('/appoint/delete/:id', appointController.deleteAppoint)
router.put('/appoint/update/:id', appointController.editAppoint)


module.exports = router