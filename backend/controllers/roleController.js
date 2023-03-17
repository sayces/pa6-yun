
const ApiError = require('../error/ApiError')
const {UserRole} = require('../models/models')

class RoleController {
  
  
  async getAllRoles(req, res) {
    let {id, role} = req.body
    const roles = await UserRole.findAll(id, role)
    return res.json(roles)
}
  


}

module.exports = new RoleController()