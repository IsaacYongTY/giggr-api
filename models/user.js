'use strict';
const bcrypt = require('bcrypt')

const { DataTypes } = require('sequelize')
const sequelize = require('../lib/sequelize.config')


const User = sequelize.define('User', {

    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tierId: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
        references: {
            models: "Tiers",
            foreignKey: "tierId"
        }
    },
  }, {

})

User.associate = models => {
    console.log(models)
    User.hasMany(models.Song)
    User.hasOne(models.Tier)
    User.hasMany(models.Gig)
    User.belongsToMany(models.Song, { as: 'Song', through: 'songs_users', foreignKey: 'songId',})
}

User.beforeCreate(async(user, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 10)
  user.password = hashedPassword
})

module.exports = User