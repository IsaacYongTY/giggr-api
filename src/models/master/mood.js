'use strict';

module.exports = (sequelize, DataTypes) => {

  const Mood = sequelize.define('mood', {

    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },

  }, {
    timestamps: false,
    underscored: true
  })

  Mood.associate = models => {
    Mood.belongsToMany(models.song, { through: "songs_moods", timestamps: false})
  }

  return Mood
}
