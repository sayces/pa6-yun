const Router = require('express')
const router = new Router()
const appointController = require('../controllers/appointController')

// router.get('/:id',appointController.getMine)
router.get('/',appointController.getAllAppoint)
router.post('/get',appointController.appoint)
// router.put('/update',appointController.updateAppoint)
// router.delete('/delete', appointController.deleteAppoint)


module.exports = router