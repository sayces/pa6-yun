const ApiError = require('../error/ApiError')
const {User, UserReputation, UserRole} = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email, userRoleId) => {
  return jwt.sign(
    { id, email, userRoleId},
    process.env.SECRET_KEY,
    {expiresIn: '24h'}
    )
}

class UserController {
  
  async signup(req, res, next) {
    const {email, password, userRoleId} = req.body

    if (!email || !password) {
      return next(ApiError.err404('адрес или пароль введен не совсем корректно'))
    }
    const candidate = await User.findOne(
      {
        where: {email}
      })
    if (candidate) {
      return next(ApiError.err404('такой пользователь уже существует'))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({email, password: hashPassword, userRoleId})
    
    // const reputation = await UserReputation.create({userId: user.id})
    
    const token = generateJwt(user.id, user.email , user.userRoleId)
    return res.json({token})
      
  }
  
  async login(req, res, next) {
    const {email, password} = req.body
    const user = await User.findOne({
      where:{email}
    })
    if (!user) {
      return next(ApiError.err500('возможно, такого пользователя не существует'))
    }
    let comparePass = bcrypt.compareSync(password, user.password)
    if (!comparePass) {
      return next(ApiError.err500('возможно, пароль указан неправильно'))
    }
    const token = generateJwt(user.id, user.email, user.role)
    return res.json({token})
  }
  
  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.email, req.user.userRoleId )
    return res.json({token})
  }

  async update_profile(req, res) {
      
  }

  async profile(req, res) {
    
  }
  
  async getAllRoles(req, res) {
    
    
    
    let roles;
    let {role} = req.query
      roles = await UserRole.findAll({role})
    return res.json(roles)
}
  


}

module.exports = new UserController()