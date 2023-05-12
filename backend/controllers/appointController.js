
const { Appointment, AppointmentStatus } = require('../models/models')
const ApiError = require('../error/ApiError')

class AppointController {

  async getAllAppoint(req, res) {
    const appoints = await Appointment.findAll({
      include: {
        model: AppointmentStatus
      }
    })
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

  async editAppoint(req, res) {

    try {

      const { id } = req.params
      const data = req.body
      console.log(req.params, req.body)

      if (!req.params || !req.body) {
        return res.status(400).json({ message: "no id or statusid" })
      }
      const updateAppoint = await Appointment.update(data, { where: { id } })

      if (!updateAppoint) {
        return res.status(400).json({ message: "aint update" })
      }

      return res.json(updateAppoint);
    } catch (e) {
      return res.status(400).json(e)
    }
  }

  // async 

  //   Posts.findAll({
  //     where: { name: "Sunshine"},
  //     include: [{
  //       model: User,
  //       where: ["year_birth = post_year"]
  //   }]
  // }).then(posts => {
  //   /* ... */
  // });

}

module.exports = new AppointController()