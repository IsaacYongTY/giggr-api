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
    // Genre.belongsToMany(models.song, { as: "songs", through: "songs_genres", foreignKey: "genreId"})
  }
  return Genre
}
