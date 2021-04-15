'use strict';
const bcrypt = require('bcrypt')

const { DataTypes } = require('sequelize')
const sequelize = require('../lib/sequelize.config')


const User = sequelize.define('user', {

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
      defaultValue: 1,
        // references: {
        //     models: "tiers",
        //     foreignKey: "tier_id"
        // }
    },
  }, {
    underscored: true
})

User.associate = models => {
    console.log(models)
    // User.hasMany(models.song)
    User.belongsTo(models.tier)
    User.hasMany(models.gig)
    User.belongsToMany(models.song, { as: 'song', through: 'songs_users', foreignKey: 'song_id',})
}

User.beforeCreate(async(user, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 10)
  user.password = hashedPassword
})

module.exports = User