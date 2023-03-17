const { Appointment, User } = require('../models/models')
const ApiError = require('../error/ApiError')

class AppointController {
  async getMine(req, res) {

  }
  
  async getAll(req, res) {

  }
  
  async create(req, res) {
    const {userId, date} = req.body
    
    const appoint = await Appointment.create({userId, date})
    
    return res.json(appoint)
      
  }

  async update(req, res) {

  }

  async delete(req,res) {

  }

}

module.exports = new AppointController()