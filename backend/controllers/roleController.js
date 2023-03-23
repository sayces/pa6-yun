
const ApiError = require('../error/ApiError')
const { UserRole } = require('../models/models')

class RoleController {


  async getAllRoles(req, res) {
    const roles = await UserRole.findAll()
    return res.json(roles)
  }



}

module.exports = new RoleController()