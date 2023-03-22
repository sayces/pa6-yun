const { Appointment, User } = require('../models/models')
const ApiError = require('../error/ApiError')

class AppointController {

  async getAllAppoint(req, res) {
    const appoints = await Appointment.findAll()
    return res.json(appoints)
  }

  async appoint(req, res) {
    const { client, master, date, time, appointStatusId } = req.body
    const appoint = await Appointment.create({ client, master, date, time, appointStatusId })

    return res.json(appoint)

  }

  async findOneAppoint(req, res) {
    
    const { id } = req.params
    const { appoint } = await Appointment.findOne({ where: { id }, })
    return res.json(appoint)
  }

  async deleteAppoint(req, res) {

    const { id } = req.params
    const { appoint } = await Appointment.destroy({ where: { id }})
    return res.json(appoint)

  }

}

module.exports = new AppointController()