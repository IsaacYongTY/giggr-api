'use strict';

module.exports = (sequelize, DataTypes) => {


  const Genre = sequelize.define('genre', {

    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },

  }, {
    timestamps: false,
    underscored: true
  })

  Genre.associate = models => {
    Genre.belongsToMany(models.song, { through: "songs_genres", timestamps: false})
  }
  return Genre
}
