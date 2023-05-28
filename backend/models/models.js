
const sequelize = require('../db')
const { DataTypes } = require('sequelize')


// Таблицы
const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: true },
  name: { type: DataTypes.STRING, allowNull: true }
},
  {
    timestamps: false,
    freezeTableName: true,



  })

const Appointment = sequelize.define('appointment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
  date: { type: DataTypes.DATEONLY, unique: false, allowNull: false, },
  time: { type: DataTypes.TIME, unique: false, allowNull: false, },

},
  {
    updatedAt: true,
    createdAt: true,
    freezeTableName: true,



  })

const Service = sequelize.define('service', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
  service: { type: DataTypes.STRING, allowNull: false, unique: true },
  description: { type: DataTypes.STRING, allowNull: false },
},
  {
    updatedAt: false,
    createdAt: false,
    freezeTableName: true,


  })




const UserRole = sequelize.define('user_role', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  role: { type: DataTypes.STRING, unique: false, allowNull: false },
},
  {
    timestamps: false,
    freezeTableName: true,



  })

const AppointmentStatus = sequelize.define('appoint_status', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  status: { type: DataTypes.STRING, allowNull: false },
},
  {
    timestamps: false,
    freezeTableName: true,



  })

const UserReputation = sequelize.define('user_reputation', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  reputation: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0, },
},
  {
    timestamps: false,
    freezeTableName: true,


  })

const GalleryPost = sequelize.define('gallery_post', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  img: { type: DataTypes.STRING, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: true },
  description: { type: DataTypes.STRING, allowNull: true },
},
  {
    timestamps: false,
    freezeTableName: true,



  })

// Связи

User.hasMany(Appointment)
Appointment.belongsTo(User, { foreignKey: { name: 'master' } },)
Appointment.belongsTo(User, { foreignKey: { name: 'client' } })

User.hasMany(UserReputation)
UserReputation.belongsTo(User)

User.hasMany(GalleryPost)
GalleryPost.belongsTo(User)

AppointmentStatus.hasMany(Appointment)
Appointment.belongsTo(AppointmentStatus)

UserRole.hasMany(User)
User.belongsTo(UserRole)

Service.hasMany(Appointment)
Appointment.belongsTo(Service)



module.exports = {
  User,
  UserReputation,
  UserRole,
  Appointment,
  AppointmentStatus,
  GalleryPost,
  Service
}