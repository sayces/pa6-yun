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
    try {
      const { id } = req.params

      if (!id) {
        res.status(400).json({ message: 'no id' })
      }


      const appointById = await Appointment.findOne({ where: { id } })
      return res.json(appointById)
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

  async editAppointStatus(req, res) {

    try {
      const { id } = req.params
      const { appointStatusId } = req.body
      if (!id || !appointStatusId) {
        return res.json({ message: 'cant find id' })
      }
      const findAppoint = await Appointment.findOne({ where: { id } })
      if (!findAppoint) {
        return res.json({ message: 'cant find post by id' })
      }
      const updateAppoint = await Appointment.update(findAppoint, { appointStatusId })

      if (!updateAppoint) {
        return res.json({ message: 'cant find post' })
      }





      return res.json(updateAppoint);
    } catch (e) {
      return res.status(400).json(e)

    }



  }


}

module.exports = new AppointController()