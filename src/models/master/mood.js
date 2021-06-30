'use strict';

module.exports = (sequelize, DataTypes) => {

  const Mood = sequelize.define('mood', {

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

  }, {
    timestamps: false,
    underscored: true
  })

  Mood.associate = models => {
    Mood.belongsToMany(models.song, { through: "songs_moods", foreignKey: "moodId", timestamps: false})
  }

  return Mood
}
