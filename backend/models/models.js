const sequelize = require('../db')
const { DataTypes,  } = require('sequelize')


// Таблицы
const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
  email: {type: DataTypes.STRING, unique: true, allowNull: false},
  password: {type: DataTypes.STRING, allowNull: false},
  name: {type: DataTypes.STRING, allowNull: true}
  },  
{ 
  timestamps: false,
  freezeTableName: true,
  alter: true
})

const Appointment = sequelize.define('appointment', {
  id: {type: DataTypes.INTEGER, primaryKey:true,  autoIncrement:true, onUpdate: 'CASCADE', onDelete:'CASCADE'},
  date: {type: DataTypes.DATEONLY ,unique: false, allowNull: false, onUpdate: 'CASCADE', onDelete:'CASCADE'},
  time: {type: DataTypes.TIME ,unique: false, allowNull: false, onUpdate: 'CASCADE', onDelete:'CASCADE'},
  },
{ 
  updatedAt: false,
  createdAt: true,
  freezeTableName: true,
  alter: true
})


const UserRole = sequelize.define('user_role', {
  id: {type: DataTypes.INTEGER,  primaryKey:true,  autoIncrement:true, onUpdate: 'CASCADE', onDelete:'CASCADE'},  
  role: {type: DataTypes.STRING, unique: false, allowNull: false},
  },
{ 
  timestamps: false,
  freezeTableName: true,
  alter: true
})

const AppointmentStatus = sequelize.define('appoint_status', {
  id: {type: DataTypes.INTEGER,  primaryKey:true, autoIncrement:true, onUpdate: 'CASCADE', onDelete: 'CASCADE'},  
  status: {type: DataTypes.STRING, allowNull: false},
  },
{ 
  timestamps: false,
  freezeTableName: true,
  alter: true
})

const UserReputation = sequelize.define('user_reputation', {
  id: {type: DataTypes.INTEGER, primaryKey:true , autoIncrement:true ,onUpdate: 'CASCADE', onDelete: 'CASCADE'}, 
  
  reputation: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0, },
  },
{ 
  timestamps: false,
  freezeTableName: true,
  alter: true
})

const GalleryPost = sequelize.define('gallery_post', {
  id: {type: DataTypes.INTEGER,  primaryKey:true, autoIncrement: true}, 
  img: {type: DataTypes.STRING, allowNull: false},
  title: {type: DataTypes.STRING, allowNull: true},
  description: {type: DataTypes.STRING, allowNull: true},
},
{ 
  timestamps: false,
  freezeTableName: true,
  alter: true
})

// Связи

User.hasMany(Appointment, {foreignKey: 'master',  onDelete: "CASCADE", onUpdate: "CASCADE"})
Appointment.belongsTo(User , {foreignKey: 'client'} )

User.hasMany(UserReputation, {onDelete: "CASCADE", onUpdate: "CASCADE"})
UserReputation.belongsTo(User  )

User.hasMany(GalleryPost, {onDelete: "CASCADE", onUpdate: "CASCADE"} )
GalleryPost.belongsTo(User )

AppointmentStatus.hasMany(Appointment, {onDelete: "CASCADE", onUpdate: "CASCADE"})
Appointment.belongsTo(AppointmentStatus)

UserRole.hasMany(User, {onDelete: "CASCADE", onUpdate: "CASCADE"} )
User.belongsTo(UserRole )





module.exports = {
  User,
  UserReputation,
  UserRole,
  Appointment,
  AppointmentStatus,
  GalleryPost
}