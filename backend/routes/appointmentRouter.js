const Router = require('express')
const router = new Router()
const appointController = require('../controllers/appointController')

router.get('/myappoint',appointController.getMine)
router.get('/myappoint/:id',)
router.get('/appoint',appointController.getAll)
router.post('/get_appoint',appointController.create)
router.put('/myappoint/update',appointController.update)



module.exports = router