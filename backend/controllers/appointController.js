const { Appointment, User } = require('../models/models')
const ApiError = require('../error/ApiError')

class AppointController {

  // async getMine(req, res) {}
  
  async getAllAppoint(req, res) {
    const appoints = await Appointment.findAll()
    return res.json(appoints)
  }
  
  async appoint(req, res) {
    const {userId, date, time, appointStatusId} = req.body
    const appoint = await Appointment.create({userId, date, time, appointStatusId})
    
    return res.json(appoint)
      
  }

  // async updateAppint(req, res) {}

  // async deleteDelete(req,res) {}

}

module.exports = new AppointController()