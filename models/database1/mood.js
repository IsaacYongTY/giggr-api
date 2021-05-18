'use strict';

module.exports = (sequelize, DataTypes) => {

  const Mood = sequelize.define('mood', {

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

  }, {
    timestamps: false,
    underscored: true
  })

  Mood.associate = models => {

  }

  return Mood
}
