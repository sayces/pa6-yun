const jwt = require('jsonwebtoken')

module.exports = function (userRole) {
return function(req, res, next) {
  if (req.method == "OPTIONS") {
    next()
  } 
  try {
    const token = req.headers.authorization.split(" ")[1] //Bearer 1234567890
    if (!token) {
      return res.status(401).json({message: 'пользователь не авторизован'})
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    if (decoded.userRoleId !== userRole) {
      return res.status(403).json({message: `доступа для вас нет`})
    }
    req.user = decoded
  } catch (e) {
    res.status(401).json({message: 'пользователь не авторизован'})
  }
}
};