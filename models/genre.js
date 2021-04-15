'use strict';

const { DataTypes } = require('sequelize')
const sequelize = require('../lib/sequelize.config')

const Genre = sequelize.define('genre', {

  title: {
    type: DataTypes.STRING,
    allowNull: false
  },

}, {
  timestamps: false,
  underscored: true
})

Genre.associate = models => {
  // Genre.belongsToMany(models.song, { as: "songs", through: "songs_genres", foreignKey: "genreId"})
}


module.exports = Genre