
const { Appointment, AppointmentStatus, User } = require('../models/models')
const ApiError = require('../error/ApiError')

class AppointController {

  async getAllAppoints(req, res) {

    const appoints = await Appointment.findAll({
      include: [
        {
          model: AppointmentStatus
        },
        {
          model: AppointmentStatus
        },
      ]
    })
    return res.json(appoints)
  }

  async getAllStatus(req, res) {

    const statuses = await AppointmentStatus.findAll()
    return res.json(statuses)
  }

  async appoint_status(req, res) {

    const statuses = await Appointment.findAll({
      include: [
        {
          model: AppointmentStatus
        },
        {
          model: AppointmentStatus
        },
      ]
    })
    return res.json(statuses)
  }

  async appoint(req, res) {

    const { client, master, date, time, appointStatusId } = req.body
    const appoint = await Appointment.create({ client, master, date, time, appointStatusId })
    return res.json(appoint)
  }

  async getOneAppoint(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        res.status(400).json({ message: 'no id' })
      }
      const appoint = await Appointment.findOne({
        where: { id },
        include: [
          {
            model: User
          },
          {
            model: AppointmentStatus
          },
        ]

      })
      return res.json(appoint)
    } catch (e) {
      return res.status(500).json(e)
    }
  }

  async deleteAppoint(req, res) {
    try {
      const { id } = req.params

      const appoint = await Appointment.destroy({ where: { id } })
      return res.json(appoint)
    } catch (e) {
      return res.status(500).json(e)
    }

  }

  async editAppoint(req, res) {

    try {

      const { id } = req.params
      const appoint = req.body
      console.log(req.params, req.body)

      if (!req.params || !req.body) {
        return res.status(400).json({ message: "no reqparams or reqbody" })
      }
      const updAppoint = await Appointment.update(appoint, { where: { id } })

      if (!updAppoint) {
        return res.status(400).json({ message: "aint update" })
      }

      return res.json(updAppoint);
    } catch (e) {
      return res.status(400).json(e)
    }
  }

}

module.exports = new AppointController()