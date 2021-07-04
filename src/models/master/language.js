'use strict';

module.exports = (sequelize, DataTypes) => {


  const Language = sequelize.define('language', {

    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },

  }, {
    timestamps: false,
    underscored: true
  })

  Language.associate = models => {
    Language.hasMany(models.song)
  }
  return Language
}
