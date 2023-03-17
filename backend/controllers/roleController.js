
const ApiError = require('../error/ApiError')
const {UserRole} = require('../models/models')

class RoleController {
  
  
  async getAllRoles(req, res) {
    let {role} = req.query
      role = await UserRole.findAll()
    return res.json(role)
}
  


}

module.exports = new RoleController()