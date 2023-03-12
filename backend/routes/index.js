const Router = require('express')
const router = new Router()

const appointRouter = require('./appointmentRouter')
const userRouter = require('./userRouter')
const galleryRouter = require('./galleryRouter')


router.use('/user', userRouter)
router.use('/appointment', appointRouter)
router.use('/gallery', galleryRouter)


module.exports = router