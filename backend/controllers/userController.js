const ApiError = require('../error/ApiError')
const {User} = require('../models/models')


class UserController {
  async signup(req, res) {
    const {email, password, name} = req.body
    const user = await User.create({email, password, name})
    return res.json(user) 
  }
  
  async login(req, res) {

  }
  
  async check(req, res, next) {
    const {id} = req.query
      if (!id) {
        return next(ApiError.err404('Not found ID'))
      }
    res.json(id)
  }

  async update_profile(req, res) {
      
  }

  async profile(req, res) {
    
  }
  
  async user_list(req, res) {
    const users = await User.findAll()
    return res.json(users)
  }
  


}

module.exports = new UserController()