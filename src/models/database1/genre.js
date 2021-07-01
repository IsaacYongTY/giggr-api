'use strict';

module.exports = (sequelize, DataTypes) => {


  const Genre = sequelize.define('genre', {

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    }
  }, {
    timestamps: false,
    underscored: true
  })

  Genre.associate = models => {
    Genre.belongsToMany(models.song, { through: "songs_genres", timestamps: false, onDelete: "cascade" })
    Genre.belongsTo(models.user)
  }
  return Genre
}
