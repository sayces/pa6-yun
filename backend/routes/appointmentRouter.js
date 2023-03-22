const Router = require('express')
const router = new Router()
const appointController = require('../controllers/appointController')

router.get('/appoint',appointController.findOneAppoint)
router.get('/',appointController.getAllAppoint)
router.post('/get',appointController.appoint)
// router.put('/update',appointController.updateAppoint)
router.delete('/appoint/delete/:id', appointController.deleteAppoint)
router.put('/appoint/update/:id', appointController.editAppointStatus)


module.exports = router