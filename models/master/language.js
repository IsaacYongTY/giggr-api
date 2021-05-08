'use strict';

module.exports = (sequelize, DataTypes) => {


  const Language = sequelize.define('language', {

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

  }, {
    timestamps: false,
    underscored: true
  })

  Language.associate = models => {
    // Genre.belongsToMany(models.song, { as: "songs", through: "songs_genres", foreignKey: "genreId"})
  }
  return Language
}
