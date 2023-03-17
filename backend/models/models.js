const sequelize = require('../db')
const { DataTypes } =require('sequelize')


// Таблицы
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
  date: {type: DataTypes.STRING ,unique: true, allowNull: false, onUpdate: 'cascade', onDelete:'cascade'},
  },
{ 
  updatedAt: false,
  createdAt: true
})


const UserRole = sequelize.define('user_role', {
  id: {type: DataTypes.INTEGER,  primaryKey:true,  autoIncrement:true, onUpdate: 'cascade', onDelete:'cascade'},  
  role: {type: DataTypes.STRING, unique: true, allowNull: false},
  },
{ 
  timestamps: false,
})

const AppointmentStatus = sequelize.define('appoint_status', {
  id: {type: DataTypes.INTEGER,  primaryKey:true, autoIncrement:true },  
  status: {type: DataTypes.STRING, allowNull: false},
  },
{ 
  timestamps: false,
})

const UserReputation = sequelize.define('user_reputation', {
  id: {type: DataTypes.INTEGER, primaryKey:true , autoIncrement:true ,onUpdate: 'cascade', onDelete: 'cascade'}, 
  
  reputation: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0, },
  },
{ 
  timestamps: false
})

const GalleryPost = sequelize.define('gallery_post', {
  id: {type: DataTypes.INTEGER,  primaryKey:true, autoIncrement: true}, 
  img: {type: DataTypes.STRING, allowNull: false},
  title: {type: DataTypes.STRING, allowNull: true},
  description: {type: DataTypes.STRING, allowNull: true},
  created_at: {type: DataTypes.STRING, allowNull: true, defaultValue: new Date().toString()},
  
},
{ 
  timestamps: false,
})

// Связи

User.hasMany(Appointment)
Appointment.belongsTo(User)

User.hasMany(UserReputation)
UserReputation.belongsTo(User)

User.hasMany(GalleryPost, {as: 'author'})
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