'use strict';

const { DataTypes } = require('sequelize')
const sequelize = require('../lib/sequelize.config')

const Genre = sequelize.define('Genre', {

  title: {
    type: DataTypes.STRING,
    allowNull: false
  },

}, {
  timestamps: false
})

Genre.associate = models => {
  Genre.belongsToMany(models.Songs, { as: "Songs", through: "songs_genres", foreignKey: "genreId"})
}


module.exports = Genre