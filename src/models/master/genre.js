'use strict';

module.exports = (sequelize, DataTypes) => {


  const Genre = sequelize.define('genre', {

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

  }, {
    timestamps: false,
    underscored: true
  })

  Genre.associate = models => {
    Genre.belongsToMany(models.song, { through: "songs_genres", foreignKey: "genreId", timestamps: false})
  }
  return Genre
}