'use strict';

const { DataTypes } = require('sequelize')
const sequelize = require('../lib/sequelize.config')

const Musician = sequelize.define('musician', {

  name: DataTypes.STRING,
  romName: DataTypes.STRING,
  enName: DataTypes.STRING,
  role: DataTypes.STRING

}, {
  timestamps: false,
  underscored: true
})

Musician.associate = models => {
  Musician.hasMany(models.song, { foreignKey: "artistId"})
}


module.exports = Musician