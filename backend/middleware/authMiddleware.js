const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
    next()
  } 
  try {
    const token = req.headers.authorization.split(" ")[1] //Bearer 123456asdfg
    if (!token) {
      return res.status(401).json({message: 'пользователь не авторизован'})
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decoded
    next()
  } catch (e) {
    res.status(401).json({message: 'пользователь не авторизован'})
  }
  
  
};

