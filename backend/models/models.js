const sequelize = require('../db')
const { DataTypes } =require('sequelize')


const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
  email: {type: DataTypes.STRING, unique: true, allowNull: false},
  password: {type: DataTypes.STRING, allowNull: false},
  name: {type: DataTypes.STRING, allowNull: true},
  },  
{ 
  timestamps: false
})

const Appointment = sequelize.define('appointment', {
  id: {type: DataTypes.INTEGER, primaryKey:true,  autoIncrement:true, onUpdate: 'cascade', onDelete:'cascade'},
  },
{ 
  timestamps: false,
  
})


const UserRole = sequelize.define('user_role', {
  id: {type: DataTypes.INTEGER,  primaryKey:true,  autoIncrement:true, defaultValue: 1 ,onUpdate: 'cascade', onDelete:'cascade', foreignKeyTo: User},  
  role: {type: DataTypes.STRING, unique: true, allowNull: false},
  },
{ 
  timestamps: false,
})

const AppointmentStatus = sequelize.define('appoint_status', {
  id: {type: DataTypes.INTEGER,  primaryKey:true, autoIncrement:true ,foreignKeyTo: Appointment},  
  status: {type: DataTypes.STRING, allowNull: false},
  },
{ 
  timestamps: false,
})

const UserReputation = sequelize.define('user_reputation', {
  id: {type: DataTypes.INTEGER, primaryKey:true , autoIncrement:true ,onUpdate: 'cascade', onDelete: 'cascade', foreignKeyTo: User}, 
  
  reputation: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0, },
  },
{ 
  timestamps: false
})

const GalleryPost = sequelize.define('gallery_post', {
  id: {type: DataTypes.INTEGER,  primaryKey:true, autoIncrement: true}, 
  img: {type: DataTypes.STRING, allowNull: false},
  name: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: true},
  author: {type: DataTypes.INTEGER, allowNull: false, foreignKeyTo: User, defaultValue: 0},
  created_at: {type: DataTypes.STRING, allowNull: true, defaultValue: new Date().toString()}

},
{ 
  timestamps: false,
})

// USER -- APPOINTMENT
User.hasMany(Appointment)
Appointment.belongsTo(User)

User.hasOne(UserReputation)
UserReputation.belongsTo(User)

User.hasMany(GalleryPost)
GalleryPost.belongsTo(User)

AppointmentStatus.hasMany(Appointment)
Appointment.belongsTo(AppointmentStatus)

UserRole.hasMany(User)
User.belongsTo(UserRole)





module.exports = {
  User,
  UserReputation,
  UserRole,
  Appointment,
  AppointmentStatus,
  GalleryPost
}