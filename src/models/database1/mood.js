'use strict';

module.exports = (sequelize, DataTypes) => {

  const Mood = sequelize.define('mood', {

    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },

  }, {
    timestamps: false,
    underscored: true
  })

  Mood.associate = models => {
    Mood.belongsToMany(models.song, { through: "songs_moods", timestamps: false, onDelete: "cascade"})
    Mood.belongsTo(models.user)
  }

  return Mood
}
